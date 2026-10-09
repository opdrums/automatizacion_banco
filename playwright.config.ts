import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /** Directorio donde están los tests */
  testDir: './tests',

  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 1,
  /** Pocos workers para no saturar un sitio productivo ni activar su WAF */
  workers: 2,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }], ['allure-playwright'], ['list']],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.bancolombia.com',
    locale: 'es-CO',
    timezoneId: 'America/Bogota',

    /* Recoger la traza al reintentar la prueba fallida. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: true,
    screenshot: 'on',
    video: 'on',
  },

  /* Configurar proyectos para los principales navegadores */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
