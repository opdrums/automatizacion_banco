import { test } from "@playwright/test";
import { Home } from "../src/tasks/Home";
import { HomeQuestion } from "../src/questions/HomeQuestions";
import { Anotations } from "../src/utils/Anotations";
import { Helpers } from "../src/utils/Helpers";

/**
 * Nota: el portal transaccional está protegido por un WAF (Imperva) y no debe
 * automatizarse en producción. Aquí solo se valida el enlace de acceso.
 */
test.describe('@Feature: Acceso a la Sucursal Virtual Personas', async () => {

    let home: Home;
    let homeQuestion: HomeQuestion;

    test.beforeEach(async ({ page }) => {
        home = new Home(page);
        homeQuestion = new HomeQuestion(page);
        Anotations.given('el usuario abre la página de inicio de Bancolombia Personas');
        await home.open();
    })

    test('Scenario: El acceso a la Sucursal Virtual dirige al portal de autenticación seguro', { tag: ['@smoke', '@seguridad', '@HU-04-CP-01'] }, async () => {
        Anotations.then(`el enlace de Sucursal Virtual Personas debería dirigir a "${Helpers.SVP_URL}"`);
        await homeQuestion.virtualBranchLinkIs(Helpers.SVP_URL);
        Anotations.and('el enlace de Sucursal Virtual Personas debería usar el protocolo HTTPS');
        await homeQuestion.virtualBranchLinkUsesHttps();
    })
})
