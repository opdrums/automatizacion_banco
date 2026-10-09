import { test } from "@playwright/test";
import { Home } from "../src/tasks/Home";
import { NavigateProducts } from "../src/tasks/NavigateProducts";
import { ProductQuestion } from "../src/questions/ProductQuestions";
import { Anotations } from "../src/utils/Anotations";
import { Helpers } from "../src/utils/Helpers";

test.describe('@Feature: Navegación por el menú Productos y Servicios', async () => {

    let home: Home;
    let navigateProducts: NavigateProducts;
    let productQuestion: ProductQuestion;

    test.beforeEach(async ({ page }) => {
        home = new Home(page);
        navigateProducts = new NavigateProducts(page);
        productQuestion = new ProductQuestion(page);
        Anotations.given('el usuario abre la página de inicio de Bancolombia Personas y acepta las cookies');
        await home.open();
        await home.acceptCookies();
    })

    for (const { producto, ruta, titulo } of Helpers.PRODUCTS) {
        test(`Scenario Outline: Navegar a la sección "${producto}"`, { tag: ['@regresion', '@HU-02-CP-01'] }, async () => {
            Anotations.when(`navega al producto "${producto}" desde el menú Productos y Servicios`);
            await navigateProducts.goToProduct(producto);
            Anotations.then(`la URL debería contener "${ruta}"`);
            await productQuestion.urlContains(ruta);
            Anotations.and(`el título de la página debería contener "${titulo}"`);
            await productQuestion.titleContains(titulo);
        })
    }
})
