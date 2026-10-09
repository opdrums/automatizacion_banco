import { Page, expect } from "@playwright/test";
import { HomePage } from "../userinterfaces/HomePage";

export class HomeQuestion {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async titleIs(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    async logoIsVisible() {
        await expect(this.page.locator(HomePage.LOGO).first()).toBeVisible();
    }

    async cookiesBannerIsHidden() {
        await expect(this.page.locator(HomePage.BTN_ACEPTAR_COOKIES)).toBeHidden();
    }

    async menuOptionIsVisible(option: string) {
        const menuOption = this.page
            .locator(HomePage.MENU_PRINCIPAL)
            .and(this.page.getByRole("link", { name: option, exact: true }));
        await expect(menuOption).toBeVisible();
    }

    async attentionLinesAreVisible(lines: string[]) {
        for (const line of lines) {
            await expect(this.page.locator(HomePage.LINEAS_ATENCION).filter({ hasText: line })).toBeVisible();
        }
    }

    async virtualBranchLinkIs(url: string) {
        await expect(this.page.locator(HomePage.LNK_SUCURSAL_VIRTUAL)).toHaveAttribute("href", url);
    }

    async virtualBranchLinkUsesHttps() {
        await expect(this.page.locator(HomePage.LNK_SUCURSAL_VIRTUAL)).toHaveAttribute("href", /^https:\/\//);
    }
}
