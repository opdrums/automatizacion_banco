import { Page, expect } from "@playwright/test";
import { SimulatorPage } from "../userinterfaces/SimulatorPage";

export class SimulatorQuestion {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async titleIsVisible() {
        await expect(this.page.locator(SimulatorPage.TITULO).first()).toBeVisible();
    }

    async conditionsAreVisible(conditions: string[]) {
        const content = this.page.locator(SimulatorPage.CONTENIDO);
        for (const condition of conditions) {
            // innerText separa las etiquetas en las que está dividida cada condición
            await expect(content).toContainText(condition, { useInnerText: true });
        }
    }

    async formFieldsAreVisible() {
        await expect(this.page.locator(SimulatorPage.TXT_MONTO)).toBeVisible();
        await expect(this.page.locator(SimulatorPage.TXT_PLAZO)).toBeVisible();
        await expect(this.page.locator(SimulatorPage.TXT_EDAD)).toBeVisible();
    }

    async noErrorMessagesAreDisplayed() {
        await expect(this.page.locator(SimulatorPage.MENSAJES_ERROR)).toHaveCount(0);
    }

    async errorMessageIsDisplayed(message: string) {
        await expect(this.page.locator(SimulatorPage.MENSAJES_ERROR).filter({ hasText: message })).toBeVisible();
    }

    async simulateButtonIsEnabled() {
        await expect(this.page.locator(SimulatorPage.BTN_SIMULAR)).toBeEnabled();
    }

    async simulateButtonIsDisabled() {
        await expect(this.page.locator(SimulatorPage.BTN_SIMULAR)).toBeDisabled();
    }
}
