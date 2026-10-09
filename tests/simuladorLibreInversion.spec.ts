import { test } from "@playwright/test";
import { SimulateCredit } from "../src/tasks/SimulateCredit";
import { SimulatorQuestion } from "../src/questions/SimulatorQuestions";
import { Anotations } from "../src/utils/Anotations";
import { Helpers } from "../src/utils/Helpers";

/**
 * Nota: el botón "Simular" está protegido con reCAPTCHA, por lo que en producción
 * se validan las reglas de negocio del formulario y no el cálculo de la cuota.
 */
test.describe('@Feature: Simulador de crédito de libre inversión', async () => {

    let simulateCredit: SimulateCredit;
    let simulatorQuestion: SimulatorQuestion;

    test.beforeEach(async ({ page }) => {
        simulateCredit = new SimulateCredit(page);
        simulatorQuestion = new SimulatorQuestion(page);
        Anotations.given('el usuario abre el simulador de crédito de libre inversión');
        await simulateCredit.open();
    })

    test('Scenario: Consultar las condiciones del crédito', { tag: ['@smoke', '@HU-03-CP-01'] }, async () => {
        Anotations.then('debería ver el título del simulador');
        await simulatorQuestion.titleIsVisible();
        Anotations.and(`debería ver las condiciones: ${Helpers.CREDIT_CONDITIONS.join(' | ')}`);
        await simulatorQuestion.conditionsAreVisible(Helpers.CREDIT_CONDITIONS);
    })

    test('Scenario: Visualizar el formulario de simulación', { tag: ['@smoke', '@HU-03-CP-02'] }, async () => {
        Anotations.when('inicia la simulación indicando que sabe cuánto dinero necesita');
        await simulateCredit.startKnowingTheAmount();
        Anotations.then('debería ver los campos monto, plazo y edad');
        await simulatorQuestion.formFieldsAreVisible();
    })

    test.describe('Rule: El monto debe estar entre $1.000.000 y $500.000.000, el plazo entre 48 y 84 meses y la edad entre 18 y 84 años', async () => {

        for (const { caso, monto, plazo, edad } of Helpers.SIMULATOR_VALID_DATA) {
            test(`Scenario Outline: Simular con datos válidos - ${caso}`, { tag: ['@regresion', '@HU-03-CP-03'] }, async () => {
                Anotations.when(`diligencia el simulador con monto "${monto}", plazo "${plazo}" meses y edad "${edad}" años`);
                await simulateCredit.setDataForm(monto, plazo, edad);
                Anotations.then('no debería ver mensajes de error en el formulario');
                await simulatorQuestion.noErrorMessagesAreDisplayed();
                Anotations.and('el botón Simular debería estar habilitado');
                await simulatorQuestion.simulateButtonIsEnabled();
            })
        }

        for (const { caso, monto, plazo, edad, mensaje } of Helpers.SIMULATOR_INVALID_DATA) {
            test(`Scenario Outline: Simular con datos fuera de rango - ${caso}`, { tag: ['@regresion', '@HU-03-CP-04'] }, async () => {
                Anotations.when(`diligencia el simulador con monto "${monto}", plazo "${plazo}" meses y edad "${edad}" años`);
                await simulateCredit.setDataForm(monto, plazo, edad);
                Anotations.then(`debería ver el mensaje de error "${mensaje}"`);
                await simulatorQuestion.errorMessageIsDisplayed(mensaje);
                Anotations.and('el botón Simular debería estar deshabilitado');
                await simulatorQuestion.simulateButtonIsDisabled();
            })
        }
    })
})
