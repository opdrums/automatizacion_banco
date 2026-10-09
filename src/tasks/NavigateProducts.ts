import { Page } from "@playwright/test";
import { ProductsMenu } from "../userinterfaces/ProductsMenu";

export class NavigateProducts {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goToProduct(producto: string) {
        await this.page.click(ProductsMenu.MENU_PRODUCTOS);
        await this.page
            .locator(ProductsMenu.LNK_PRODUCTOS)
            .and(this.page.getByRole("link", { name: producto, exact: true }))
            .click();
    }
}
