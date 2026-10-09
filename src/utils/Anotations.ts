import { test } from "@playwright/test";

/**
 * Registra los pasos Gherkin como anotaciones del test para que
 * se visualicen en el reporte de Playwright (npx playwright show-report).
 */
export class Anotations {
    public static given(text: string) {
        test.info().annotations.push({ type: 'GIVEN', description: text });
    }
    public static when(text: string) {
        test.info().annotations.push({ type: 'WHEN', description: text });
    }
    public static then(text: string) {
        test.info().annotations.push({ type: 'THEN', description: text });
    }
    public static and(text: string) {
        test.info().annotations.push({ type: 'AND', description: text });
    }

    public static log(text: string) {
        test.info().annotations.push({ type: 'LOG', description: text });
    }

    public static warning(text: string) {
        test.info().annotations.push({ type: 'WARNING', description: text });
    }

    public static step(text: string) {
        test.info().annotations.push({ type: 'STEP', description: text });
    }

    public static link(text: string) {
        test.info().annotations.push({ type: 'LINK', description: text });
    }

}
