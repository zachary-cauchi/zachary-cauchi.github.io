import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright'

test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio')
})

test('url is as expected', async ({ page }) => {
  await expect(page).toHaveTitle(/Portfolio/);
})

test('percy snapshot', async ({ page }) => {
  await percySnapshot(page, 'Portfolio page')
})
