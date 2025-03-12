import { test, expect } from '@playwright/test';

test('should allow user to submit a moving request', async ({ page }) => {
  // 1️⃣ Frontend öffnen
  await page.goto('http://localhost:4200');

  // 2️⃣ Pflichtfelder ausfüllen
  await page.fill('#oldAddress', 'Main Street 10');
  await page.fill('#newAddress', 'Green Avenue 5');
  await page.fill('#movingDate', '2025-04-01');

  // 3️⃣ Button klicken
  await page.click('#submitRequest');

  // 4️⃣ Bestätigung prüfen
  await expect(page.locator('#successMessage')).toHaveText('Your moving request has been submitted!');
});
