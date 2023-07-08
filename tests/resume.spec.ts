import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright'

test.beforeEach(async ({ page }) => {
    await page.goto('/resume')
})

test('url is as expected', async ({ page }) => {
  await expect(page).toHaveTitle(/Resume/);
});

test('percy snapshot', async ({ page }) => {
  await percySnapshot(page, 'Resume page')
})