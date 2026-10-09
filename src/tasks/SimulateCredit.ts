import { Page } from "@playwright/test";
import { SimulatorPage } from "../userinterfaces/SimulatorPage";

export class SimulateCredit {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(SimulatorPage.URL, { waitUntil: "domcontentloaded" });
    }

    async startKnowingTheAmount() {
        await this.page.click(SimulatorPage.BTN_CONTINUAR);
        await this.page.check(SimulatorPage.OPT_SABE_MONTO_SI);
    }

    async setDataForm(monto: string, plazo: string, edad: string) {
        await this.startKnowingTheAmount();
        await this.page.fill(SimulatorPage.TXT_MONTO, monto);
        await this.page.fill(SimulatorPage.TXT_PLAZO, plazo);
        await this.page.fill(SimulatorPage.TXT_EDAD, edad);
        // Al salir del último campo se disparan las validaciones del formulario
        await this.page.press(SimulatorPage.TXT_EDAD, "Tab");
    }
}
