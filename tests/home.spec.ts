import { test } from "@playwright/test";
import { Home } from "../src/tasks/Home";
import { HomeQuestion } from "../src/questions/HomeQuestions";
import { Anotations } from "../src/utils/Anotations";
import { Helpers } from "../src/utils/Helpers";

test.describe('@Feature: Página de inicio de Bancolombia Personas', async () => {

    let home: Home;
    let homeQuestion: HomeQuestion;

    test.beforeEach(async ({ page }) => {
        home = new Home(page);
        homeQuestion = new HomeQuestion(page);
        Anotations.given('el usuario abre la página de inicio de Bancolombia Personas');
        await home.open();
    })

    test('Scenario: Cargar la página de inicio correctamente', { tag: ['@smoke', '@HU-01-CP-01'] }, async () => {
        Anotations.then(`debería ver que el título de la página es "${Helpers.HOME_TITLE}"`);
        await homeQuestion.titleIs(Helpers.HOME_TITLE);
        Anotations.and('debería ver el logo de Bancolombia');
        await homeQuestion.logoIsVisible();
    })

    test('Scenario: Aceptar el uso de cookies', { tag: ['@smoke', '@HU-01-CP-02'] }, async () => {
        Anotations.when('acepta el uso de cookies');
        await home.acceptCookies();
        Anotations.then('el aviso de cookies ya no debería estar visible');
        await homeQuestion.cookiesBannerIsHidden();
    })

    for (const opcion of Helpers.MENU_OPTIONS) {
        test(`Scenario Outline: Visualizar la opción "${opcion}" en el menú principal`, { tag: ['@HU-01-CP-03'] }, async () => {
            Anotations.then(`debería ver la opción "${opcion}" en el menú principal`);
            await homeQuestion.menuOptionIsVisible(opcion);
        })
    }

    test('Scenario: Consultar las líneas de atención telefónica', { tag: ['@HU-01-CP-04'] }, async () => {
        Anotations.then(`debería ver las líneas de atención: ${Helpers.ATTENTION_LINES.join(' | ')}`);
        await homeQuestion.attentionLinesAreVisible(Helpers.ATTENTION_LINES);
    })
})
