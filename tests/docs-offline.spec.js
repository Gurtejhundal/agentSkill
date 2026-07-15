import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

test.describe('Offline File Protocol', () => {
  test('should load correctly via file:// double-click protocol', async ({ page }) => {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Generate absolute file:// URL
    const fileUrl = pathToFileURL(path.resolve('docs/index.html')).href;
    console.log(`Opening direct file:// link: ${fileUrl}`);

    await page.goto(fileUrl);

    // Verify no console errors occurred (specifically CORS fetch errors)
    expect(consoleErrors).toEqual([]);

    // 1. All 24 skills render
    const cards = page.locator('.skill-card');
    await expect(cards).toHaveCount(24);

    // 2. Search works
    const search = page.locator('#search-input');
    await search.fill('designer-mobile');
    await expect(cards).toHaveCount(1);
    await expect(cards.first().locator('.skill-title-text')).toHaveText('Mobile Design Reconstruction');
    await search.fill('');

    // 3. A skill drawer opens
    const card = page.locator('.skill-card:has-text("Purposeful 3D Animation")');
    await card.click();
    const dialog = page.locator('#drawer');
    await expect(dialog).toBeVisible();
    await expect(page.locator('#drawer-title')).toHaveText('Purposeful 3D Animation');

    // Close drawer
    await page.locator('#drawer-close').click();
    await expect(dialog).not.toBeVisible();

    // 4. Workflow data renders
    const workflowCards = page.locator('.workflow-card');
    await expect(workflowCards).toHaveCount(8);
  });
});
