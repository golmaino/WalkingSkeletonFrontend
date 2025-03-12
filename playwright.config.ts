import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    headless: true,
    baseURL: 'http://localhost:4200',
    browserName: 'chromium',
    viewport: { width: 1280, height: 720 },
  },
});
