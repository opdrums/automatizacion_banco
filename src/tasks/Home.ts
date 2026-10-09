import { Page } from "@playwright/test";
import { HomePage } from "../userinterfaces/HomePage";

export class Home {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto(HomePage.URL, { waitUntil: "domcontentloaded" });
    }

    async acceptCookies() {
        const btnCookies = this.page.locator(HomePage.BTN_ACEPTAR_COOKIES);
        await btnCookies.waitFor({ state: "visible" });
        await btnCookies.click();
    }
}
