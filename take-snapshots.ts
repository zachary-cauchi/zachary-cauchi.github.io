const { chromium, expect } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');
const url = require('url');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const baseUrl = process.env.NUXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.getByTestId(/cookie-dismiss/).click({ force: true });
  await expect(page.getByTestId(/cookie-dismiss/)).not.toBeVisible()
  await percySnapshot(page, 'About Me Page');


  await page.goto(new URL('/resume', baseUrl).toString(), { waitUntil: 'networkidle' });
  await page.getByTestId(/cookie-dismiss/).click({ force: true });
  await expect(page.getByTestId(/cookie-dismiss/)).not.toBeVisible()
  await percySnapshot(page, 'Resume Page');
  
  await page.goto(new URL('/portfolio', baseUrl).toString(), { waitUntil: 'networkidle' });
  await page.getByTestId(/cookie-dismiss/).click({ force: true });
  await expect(page.getByTestId(/cookie-dismiss/)).not.toBeVisible()
  await percySnapshot(page, 'Portfolio Page');

  await browser.close();
})();
