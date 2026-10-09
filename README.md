# Automatización de pruebas web – Bancolombia Personas

Proyecto de automatización con **Playwright + TypeScript** bajo el patrón **Screenplay**, sobre
[bancolombia.com/personas](https://www.bancolombia.com/personas). Sigue la arquitectura del proyecto base
[somospragma/qa-web-playwright-screenplay](https://github.com/somospragma/qa-web-playwright-screenplay).
Los casos de prueba se escriben con metodología **Gherkin** (Feature / Scenario / Given / When / Then),
registrada como anotaciones que se ven en el reporte de Playwright.

## ✅ Tecnologías
- Node.js 18+
- Playwright Test
- TypeScript
- Allure (opcional)
- Visual Studio Code con el plugin *Playwright Test for VSCode*

## 📁 Explicación de carpetas

```
proyecto_banco/
├── src/
│   ├── userinterfaces/   # Localizadores de cada pantalla (HomePage, ProductsMenu, SimulatorPage)
│   ├── tasks/            # Acciones del usuario (Home, NavigateProducts, SimulateCredit)
│   ├── questions/        # Validaciones del estado de la página (HomeQuestion, ProductQuestion, SimulatorQuestion)
│   └── utils/
│       ├── Anotations.ts # Pasos Gherkin (GIVEN / WHEN / THEN / AND) como anotaciones del reporte
│       └── Helpers.ts    # Textos esperados y datos de prueba
├── tests/                # Casos de prueba (*.spec.ts)
├── playwright.config.ts  # Configuración: URL base, navegadores, reportes, capturas y videos
└── package.json
```

- **userinterfaces**: solo contienen los selectores de cada pantalla.
- **tasks**: lo que hace el usuario (abrir la página, aceptar cookies, diligenciar el simulador...).
- **questions**: lo que se verifica (con `expect` de Playwright).
- **tests**: cada `test.describe('@Feature: ...')` es una característica y cada `test('Scenario: ...')` un escenario.
  Los esquemas de escenario (*Scenario Outline*) se implementan recorriendo los datos de `Helpers.ts`.

Ejemplo:

```ts
test('Scenario: Aceptar el uso de cookies', { tag: ['@smoke'] }, async () => {
    Anotations.when('acepta el uso de cookies');
    await home.acceptCookies();
    Anotations.then('el aviso de cookies ya no debería estar visible');
    await homeQuestion.cookiesBannerIsHidden();
})
```

## 🛠️ Instalación y ejecución

```
npm install
npx playwright install chromium
```

| Comando | Descripción |
|---|---|
| `npx playwright test` | Ejecuta todos los tests |
| `npx playwright test --grep @smoke` | Ejecuta por etiqueta (`@smoke`, `@regresion`, `@seguridad`, `@HU-03-CP-04`...) |
| `npx playwright test tests/home.spec.ts` | Ejecuta un archivo |
| `npx playwright test --headed` | Ejecuta viendo el navegador |
| `npx playwright test --debug` | Modo debug |
| `npx playwright show-report` | Abre el reporte HTML (pasos Gherkin, capturas y videos) |

## 🧪 Casos de prueba

| ID | Feature | Escenario | Técnica |
|---|---|---|---|
| HU-01-CP-01 | Página de inicio | Carga correcta (título y logo) | Smoke |
| HU-01-CP-02 | Página de inicio | Aceptar el uso de cookies | Funcional |
| HU-01-CP-03 | Página de inicio | Opciones del menú principal (5 casos) | Scenario Outline |
| HU-01-CP-04 | Página de inicio | Líneas de atención telefónica | Funcional |
| HU-02-CP-01 | Navegación | Navegar a 7 productos desde *Productos y Servicios* | Scenario Outline |
| HU-03-CP-01 | Simulador libre inversión | Condiciones del crédito | Smoke |
| HU-03-CP-02 | Simulador libre inversión | Visualizar el formulario | Smoke |
| HU-03-CP-03 | Simulador libre inversión | Datos válidos (mínimos, máximos, intermedios) | Valores límite y partición de equivalencia |
| HU-03-CP-04 | Simulador libre inversión | Datos fuera de rango (6 casos) | Valores límite inválidos |
| HU-04-CP-01 | Sucursal Virtual | El enlace dirige al portal de autenticación por HTTPS | Seguridad |

**Total:** 10 escenarios / 27 ejecuciones.

| Campo del simulador | Mínimo válido | Máximo válido | Inválidos probados |
|---|---|---|---|
| Monto | 1.000.000 | 500.000.000 | 999.999 y 500.000.001 |
| Plazo (meses) | 48 | 84 | 47 y 85 |
| Edad (años) | 18 | 84 | 17 y 85 |

## ⚠️ Alcance y consideraciones éticas

Las pruebas corren contra el **sitio productivo** de un banco:

- **No se envían credenciales.** El portal transaccional está protegido por un WAF (Imperva) que bloquea la
  automatización; solo se valida que el enlace de acceso sea correcto y use HTTPS.
- **El botón "Simular" está protegido con reCAPTCHA.** No se evade: se validan las reglas de negocio del formulario
  (mensajes de error y habilitación del botón), no el cálculo de la cuota. En un proyecto real esto se probaría en
  un ambiente de QA o a nivel de API.
- Se usan 2 workers para no generar carga innecesaria sobre el sitio.

## 💹 Reportes con Allure

Instalar Allure con scoop (PowerShell):
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
scoop install allure
```
Generar y abrir el reporte:
```
allure generate allure-results --clean
allure open allure-report
```
