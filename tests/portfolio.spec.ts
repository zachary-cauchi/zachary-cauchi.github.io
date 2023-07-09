import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio')
})

test('url is as expected', async ({ page }) => {
  await expect(page).toHaveTitle(/Portfolio/);
})
