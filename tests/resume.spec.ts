import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/resume')
})

test('url is as expected', async ({ page }) => {
  await expect(page).toHaveTitle(/Resume/);
});
