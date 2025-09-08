import { defineConfig, devices } from '@playwright/test';
require('dotenv').config()

export default defineConfig({
  testDir: './tests',
  timeout: 20 * 1000,
  expect: {
    // tempo maximo para assert
    timeout: 2000
  },

  // executa os testes dos arquivos em paralelo
  fullyParallel: true,
  // falha a build no CI se acidentalmente deixar um test.only no codigo-fonte
  forbidOnly: !!process.env.CI,
  // tenta novamente apenas no CI 
  retries: process.env.CI ? 2 : 0,
  // desativa testes paralelos no CI
  workers: process.env.CI ? 1 : undefined,
  // relatorio a ser usado
  reporter: 'html',
  // configuracoes compartilhadas para todos os projetos abaixo
  use: {
    // coleta o trace ao tentar novamente um teste que falhou
    trace: 'on-first-retry',
    headless: true,
    baseURL: process.env.BASE_URL,
    // nao tira print se falhar teste
    screenshot: 'off',
    // salva videos da execucao
    video: 'on',
  },

  projects: [
    // define browsers para executar
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});