import { test, expect } from '@playwright/test';

test.describe('Portal Data Rendering', () => {
  test('should load the documentation page without console errors', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('index.html');
    expect(consoleErrors).toEqual([]);
  });

  test('should render all 24 skill cards', async ({ page }) => {
    await page.goto('index.html');
    const skillCards = page.locator('.skill-card');
    await expect(skillCards).toHaveCount(24);
  });

  test('should render the three example project cards', async ({ page }) => {
    await page.goto('index.html');
    const exampleCards = page.locator('#examples-grid .example-card');
    await expect(exampleCards).toHaveCount(3);
  });
});
