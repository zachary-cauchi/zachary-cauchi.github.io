import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('url is as expected', async ({ page }) => {
  await expect(page).toHaveTitle(/About me/)
});
