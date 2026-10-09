import { Page, expect } from "@playwright/test";

export class ProductQuestion {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async urlContains(path: string) {
        await expect(this.page).toHaveURL(new RegExp(path));
    }

    async titleContains(title: string) {
        await expect(this.page).toHaveTitle(new RegExp(title));
    }
}
