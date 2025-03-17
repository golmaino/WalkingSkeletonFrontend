import { test, expect } from '@playwright/test';

test('should allow user to submit a moving request', async ({ page }) => {
  await page.goto('http://localhost:4200/moving');

  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#oldAddress', 'Main Street 10');
  await page.fill('#newAddress', 'Green Avenue 5');
  await page.fill('#movingDate', '2025-04-01');

  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('Move request successfully created!');
    await dialog.accept();
  });

  await page.click('button[type="submit"]');
});
