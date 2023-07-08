import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/resume')
})

test('url is as expected', async ({ page }) => {
  await expect(page).toHaveTitle(/Resume/);
});
