# Casos de prueba – Automatización Bancolombia Personas

Matriz de casos de prueba del proyecto. Cada caso está automatizado con **Playwright + TypeScript**
(patrón Screenplay) y escrito en **Gherkin**. La versión en Excel está en
[Casos_de_Prueba.xlsx](Casos_de_Prueba.xlsx).

- **Total:** 4 historias de usuario · 10 escenarios · 27 casos ejecutados
- **Última ejecución:** 2026-10-08 en [GitHub Actions](https://github.com/opdrums/automatizacion_banco/actions/runs/37863982480) (Chromium) · **27/27 aprobados**

## Contenido
- [HU-01 – Página de inicio](#hu-01--página-de-inicio)
- [HU-02 – Navegación por Productos y Servicios](#hu-02--navegación-por-productos-y-servicios)
- [HU-03 – Simulador de crédito de libre inversión](#hu-03--simulador-de-crédito-de-libre-inversión)
- [HU-04 – Acceso a la Sucursal Virtual Personas](#hu-04--acceso-a-la-sucursal-virtual-personas)
- [Resumen](#resumen)

## HU-01 – Página de inicio

> Como usuario de Bancolombia Personas quiero que la página de inicio cargue correctamente, con su menú, aviso de cookies y líneas de atención, para encontrar la información del banco.

**Archivo:** [`tests/home.spec.ts`](../tests/home.spec.ts) · **Casos:** 8

| ID | Escenario | Datos de prueba | Resultado esperado | Técnica | Estado |
|---|---|---|---|---|---|
| HU-01-CP-01 | Cargar la página de inicio correctamente | Título esperado: "Bancolombia Personas" | El título de la página es "Bancolombia Personas" y el logo de Bancolombia es visible. | Smoke | ✅ Aprobado |
| HU-01-CP-02 | Aceptar el uso de cookies | — | El aviso de cookies deja de estar visible. | Funcional | ✅ Aprobado |
| HU-01-CP-03.1 | Visualizar la opción "Inicio" en el menú principal | Opción: "Inicio" | La opción "Inicio" es visible en el menú principal. | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-01-CP-03.2 | Visualizar la opción "Necesidades" en el menú principal | Opción: "Necesidades" | La opción "Necesidades" es visible en el menú principal. | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-01-CP-03.3 | Visualizar la opción "Productos y Servicios" en el menú principal | Opción: "Productos y Servicios" | La opción "Productos y Servicios" es visible en el menú principal. | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-01-CP-03.4 | Visualizar la opción "Educación Financiera" en el menú principal | Opción: "Educación Financiera" | La opción "Educación Financiera" es visible en el menú principal. | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-01-CP-03.5 | Visualizar la opción "Trámites digitales" en el menú principal | Opción: "Trámites digitales" | La opción "Trámites digitales" es visible en el menú principal. | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-01-CP-04 | Consultar las líneas de atención telefónica | Bogotá +57 (601) 343 0000<br>Medellín +57 (604) 510 9000<br>Línea gratuita resto del país: 01 8000 9 12345 | Las tres líneas de atención son visibles en la página. | Funcional | ✅ Aprobado |

<details><summary>Ejemplo en Gherkin (HU-01-CP-03.1)</summary>

```gherkin
Scenario: Visualizar la opción "Inicio" en el menú principal
  Given el usuario abre la página de inicio de Bancolombia Personas
  Then la opción "Inicio" es visible en el menú principal
```
</details>

## HU-02 – Navegación por Productos y Servicios

> Como usuario quiero navegar desde el menú Productos y Servicios a cada producto para conocer su oferta.

**Archivo:** [`tests/navegacionProductos.spec.ts`](../tests/navegacionProductos.spec.ts) · **Casos:** 7

| ID | Escenario | Datos de prueba | Resultado esperado | Técnica | Estado |
|---|---|---|---|---|---|
| HU-02-CP-01.1 | Navegar a la sección "Cuentas" | Producto: Cuentas<br>Ruta: /productos/cuentas<br>Título: Cuentas de ahorros | La URL contiene "/productos/cuentas" y el título de la página contiene "Cuentas de ahorros". | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-02-CP-01.2 | Navegar a la sección "Tarjetas Débito" | Producto: Tarjetas Débito<br>Ruta: /tarjetas-debito<br>Título: Tarjetas Débito | La URL contiene "/tarjetas-debito" y el título de la página contiene "Tarjetas Débito". | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-02-CP-01.3 | Navegar a la sección "Tarjetas de Crédito" | Producto: Tarjetas de Crédito<br>Ruta: /tarjetas-credito<br>Título: Tarjetas de Crédito | La URL contiene "/tarjetas-credito" y el título de la página contiene "Tarjetas de Crédito". | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-02-CP-01.4 | Navegar a la sección "Créditos" | Producto: Créditos<br>Ruta: /personas/creditos<br>Título: Créditos | La URL contiene "/personas/creditos" y el título de la página contiene "Créditos". | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-02-CP-01.5 | Navegar a la sección "Vivienda" | Producto: Vivienda<br>Ruta: /personas/vivienda<br>Título: Vivienda | La URL contiene "/personas/vivienda" y el título de la página contiene "Vivienda". | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-02-CP-01.6 | Navegar a la sección "Seguros y asistencias" | Producto: Seguros y asistencias<br>Ruta: /personas/seguros<br>Título: Seguros | La URL contiene "/personas/seguros" y el título de la página contiene "Seguros". | Funcional (Scenario Outline) | ✅ Aprobado |
| HU-02-CP-01.7 | Navegar a la sección "Inversiones" | Producto: Inversiones<br>Ruta: /productos/inversiones<br>Título: Inversion | La URL contiene "/productos/inversiones" y el título de la página contiene "Inversion". | Funcional (Scenario Outline) | ✅ Aprobado |

<details><summary>Ejemplo en Gherkin (HU-02-CP-01.1)</summary>

```gherkin
Scenario: Navegar a la sección "Cuentas"
  Given el usuario abre la página de inicio de Bancolombia Personas y acepta las cookies
  When navega al producto "Cuentas" desde el menú Productos y Servicios
  Then la URL contiene "/productos/cuentas" y el título de la página contiene "Cuentas de ahorros"
```
</details>

## HU-03 – Simulador de crédito de libre inversión

> Como usuario quiero diligenciar el simulador de libre inversión y que valide el monto ($1.000.000 – $500.000.000), el plazo (48 – 84 meses) y la edad (18 – 84 años) para simular un crédito válido.

**Archivo:** [`tests/simuladorLibreInversion.spec.ts`](../tests/simuladorLibreInversion.spec.ts) · **Casos:** 11

| ID | Escenario | Datos de prueba | Resultado esperado | Técnica | Estado |
|---|---|---|---|---|---|
| HU-03-CP-01 | Consultar las condiciones del crédito | Edad entre 18 y 84<br>Monto mínimo $1.000.000<br>Plazo entre 48 y 84 meses | El título del simulador y las tres condiciones del crédito son visibles. | Smoke | ✅ Aprobado |
| HU-03-CP-02 | Visualizar el formulario de simulación | — | Los campos monto, plazo y edad son visibles. | Smoke | ✅ Aprobado |
| HU-03-CP-03.1 | Simular con datos válidos – valores mínimos | Monto: $1.000.000<br>Plazo: 48 meses<br>Edad: 18 años | No se muestran mensajes de error y el botón Simular está habilitado. | Valores límite (mínimo válido) | ✅ Aprobado |
| HU-03-CP-03.2 | Simular con datos válidos – valores máximos | Monto: $500.000.000<br>Plazo: 84 meses<br>Edad: 84 años | No se muestran mensajes de error y el botón Simular está habilitado. | Valores límite (máximo válido) | ✅ Aprobado |
| HU-03-CP-03.3 | Simular con datos válidos – valores intermedios | Monto: $25.000.000<br>Plazo: 60 meses<br>Edad: 35 años | No se muestran mensajes de error y el botón Simular está habilitado. | Partición de equivalencia (clase válida) | ✅ Aprobado |
| HU-03-CP-04.1 | Simular con datos fuera de rango – monto menor al mínimo | Monto: $999.999<br>Plazo: 60 meses<br>Edad: 30 años | Se muestra el mensaje "El campo no cumple con el valor mínimo: $1.000.000" y el botón Simular está deshabilitado. | Valores límite (inválido) | ✅ Aprobado |
| HU-03-CP-04.2 | Simular con datos fuera de rango – monto mayor al máximo | Monto: $500.000.001<br>Plazo: 60 meses<br>Edad: 30 años | Se muestra el mensaje "El campo no cumple con el valor máximo: $500.000.000" y el botón Simular está deshabilitado. | Valores límite (inválido) | ✅ Aprobado |
| HU-03-CP-04.3 | Simular con datos fuera de rango – plazo menor al mínimo | Monto: $10.000.000<br>Plazo: 47 meses<br>Edad: 30 años | Se muestra el mensaje "El campo no cumple con el valor mínimo: 48 meses" y el botón Simular está deshabilitado. | Valores límite (inválido) | ✅ Aprobado |
| HU-03-CP-04.4 | Simular con datos fuera de rango – plazo mayor al máximo | Monto: $10.000.000<br>Plazo: 85 meses<br>Edad: 30 años | Se muestra el mensaje "El campo no cumple con el valor máximo: 84 meses" y el botón Simular está deshabilitado. | Valores límite (inválido) | ✅ Aprobado |
| HU-03-CP-04.5 | Simular con datos fuera de rango – edad menor a la mínima | Monto: $10.000.000<br>Plazo: 60 meses<br>Edad: 17 años | Se muestra el mensaje "Debes tener al menos 18 años para solicitar el crédito" y el botón Simular está deshabilitado. | Valores límite (inválido) | ✅ Aprobado |
| HU-03-CP-04.6 | Simular con datos fuera de rango – edad mayor a la máxima | Monto: $10.000.000<br>Plazo: 60 meses<br>Edad: 85 años | Se muestra el mensaje "Debes tener máximo 84 años para solicitar el crédito" y el botón Simular está deshabilitado. | Valores límite (inválido) | ✅ Aprobado |

<details><summary>Ejemplo en Gherkin (HU-03-CP-03.1)</summary>

```gherkin
Scenario: Simular con datos válidos – valores mínimos
  Given el usuario abre el simulador de crédito de libre inversión
  When diligencia el simulador con monto, plazo y edad
  Then no se muestran mensajes de error y el botón Simular está habilitado
```
</details>

## HU-04 – Acceso a la Sucursal Virtual Personas

> Como usuario quiero que el acceso a la Sucursal Virtual me lleve al portal de autenticación oficial por HTTPS para ingresar de forma segura.

**Archivo:** [`tests/sucursalVirtual.spec.ts`](../tests/sucursalVirtual.spec.ts) · **Casos:** 1

| ID | Escenario | Datos de prueba | Resultado esperado | Técnica | Estado |
|---|---|---|---|---|---|
| HU-04-CP-01 | El acceso a la Sucursal Virtual dirige al portal de autenticación seguro | URL esperada: https://svpersonas.apps.bancolombia.com/autenticacion | El enlace de Sucursal Virtual Personas dirige a la URL esperada y usa HTTPS. | Seguridad | ✅ Aprobado |

<details><summary>Ejemplo en Gherkin (HU-04-CP-01)</summary>

```gherkin
Scenario: El acceso a la Sucursal Virtual dirige al portal de autenticación seguro
  Given el usuario abre la página de inicio de Bancolombia Personas
  Then el enlace de Sucursal Virtual Personas dirige a la URL esperada y usa HTTPS
```
</details>

## Resumen

| Historia de usuario | Casos | Aprobados |
|---|---|---|
| HU-01 – Página de inicio | 8 | 8 |
| HU-02 – Navegación por Productos y Servicios | 7 | 7 |
| HU-03 – Simulador de crédito de libre inversión | 11 | 11 |
| HU-04 – Acceso a la Sucursal Virtual Personas | 1 | 1 |
| **Total** | **27** | **27** |

| Técnica de prueba | Casos |
|---|---|
| Funcional | 2 |
| Funcional (Scenario Outline) | 12 |
| Partición de equivalencia (clase válida) | 1 |
| Seguridad | 1 |
| Smoke | 3 |
| Valores límite (inválido) | 6 |
| Valores límite (máximo válido) | 1 |
| Valores límite (mínimo válido) | 1 |

### Valores límite del simulador (HU-03)

| Campo | Mínimo válido | Máximo válido | Inválidos probados |
|---|---|---|---|
| Monto | $1.000.000 | $500.000.000 | $999.999 y $500.000.001 |
| Plazo (meses) | 48 | 84 | 47 y 85 |
| Edad (años) | 18 | 84 | 17 y 85 |
