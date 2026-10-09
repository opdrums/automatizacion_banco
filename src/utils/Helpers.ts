
export class Helpers {
    static readonly HOME_TITLE = "Bancolombia Personas";
    static readonly SVP_URL = "https://svpersonas.apps.bancolombia.com/autenticacion";

    static readonly MENU_OPTIONS = [
        "Inicio",
        "Necesidades",
        "Productos y Servicios",
        "Educación Financiera",
        "Trámites digitales",
    ];

    static readonly ATTENTION_LINES = [
        "Bogotá +57 (601) 343 0000",
        "Medellín +57 (604) 510 9000",
        "Línea gratuita resto del país: 01 8000 9 12345",
    ];

    static readonly PRODUCTS = [
        { producto: "Cuentas", ruta: "/productos/cuentas", titulo: "Cuentas de ahorros" },
        { producto: "Tarjetas Débito", ruta: "/tarjetas-debito", titulo: "Tarjetas Débito" },
        { producto: "Tarjetas de Crédito", ruta: "/tarjetas-credito", titulo: "Tarjetas de Crédito" },
        { producto: "Créditos", ruta: "/personas/creditos", titulo: "Créditos" },
        { producto: "Vivienda", ruta: "/personas/vivienda", titulo: "Vivienda" },
        { producto: "Seguros y asistencias", ruta: "/personas/seguros", titulo: "Seguros" },
        { producto: "Inversiones", ruta: "/productos/inversiones", titulo: "Inversion" },
    ];

    static readonly CREDIT_CONDITIONS = [
        "Edad entre 18 y 84",
        "Monto mínimo $1.000.000",
        "Plazo entre 48 y 84 meses",
    ];

    /** Valores límite y partición de equivalencia válidos. */
    static readonly SIMULATOR_VALID_DATA = [
        { caso: "valores mínimos", monto: "1000000", plazo: "48", edad: "18" },
        { caso: "valores máximos", monto: "500000000", plazo: "84", edad: "84" },
        { caso: "valores intermedios", monto: "25000000", plazo: "60", edad: "35" },
    ];

    /** Valores límite inválidos con el mensaje de error esperado. */
    static readonly SIMULATOR_INVALID_DATA = [
        { caso: "monto menor al mínimo", monto: "999999", plazo: "60", edad: "30", mensaje: "El campo no cumple con el valor mínimo: $1.000.000" },
        { caso: "monto mayor al máximo", monto: "500000001", plazo: "60", edad: "30", mensaje: "El campo no cumple con el valor máximo: $500.000.000" },
        { caso: "plazo menor al mínimo", monto: "10000000", plazo: "47", edad: "30", mensaje: "El campo no cumple con el valor mínimo: 48 meses" },
        { caso: "plazo mayor al máximo", monto: "10000000", plazo: "85", edad: "30", mensaje: "El campo no cumple con el valor máximo: 84 meses" },
        { caso: "edad menor a la mínima", monto: "10000000", plazo: "60", edad: "17", mensaje: "Debes tener al menos 18 años para solicitar el crédito" },
        { caso: "edad mayor a la máxima", monto: "10000000", plazo: "60", edad: "85", mensaje: "Debes tener máximo 84 años para solicitar el crédito" },
    ];
}
