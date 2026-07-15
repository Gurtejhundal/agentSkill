import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const outputDir = path.resolve('test-results/docs-screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

test.describe('Portal State Screenshots @screenshot', () => {
  const viewports = [
    { name: '1440x1000', width: 1440, height: 1000 },
    { name: '1024x900', width: 1024, height: 900 },
    { name: '768x1024', width: 768, height: 1024 },
    { name: '430x932', width: 430, height: 932 },
    { name: '390x844', width: 390, height: 844 },
    { name: '360x800', width: 360, height: 800 }
  ];

  for (const vp of viewports) {
    test.describe(`Viewport: ${vp.name}`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });

      test('should capture required layout states', async ({ page }) => {
        await page.goto('index.html');
        await page.waitForLoadState('networkidle');

        // State 1: Hero
        const headerAndHero = page.locator('.hero');
        await page.screenshot({ path: path.join(outputDir, `state-1-hero-${vp.name}.png`) });

        // State 2: Skills explorer
        await page.locator('#skills').scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(outputDir, `state-2-skills-explorer-${vp.name}.png`) });

        // State 3: Active search results
        const search = page.locator('#search-input');
        await search.fill('mobile');
        await page.screenshot({ path: path.join(outputDir, `state-3-search-results-${vp.name}.png`) });
        await search.fill(''); // Clear search

        // State 4: Open skill details
        const card = page.locator('.skill-card:has-text("Mobile Design Reconstruction")');
        await card.click();
        const dialog = page.locator('#drawer');
        await expect(dialog).toBeVisible();
        await page.screenshot({ path: path.join(outputDir, `state-4-open-skill-details-${vp.name}.png`) });

        // State 10 (If mobile): Mobile full-screen skill sheet
        if (vp.width <= 430) {
          await page.screenshot({ path: path.join(outputDir, `state-10-mobile-fullscreen-sheet-${vp.name}.png`) });
        }

        // Close details drawer
        await page.locator('#drawer-close').click();
        await expect(dialog).not.toBeVisible();

        // State 5: Workflow explorer
        await page.locator('#workflows').scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(outputDir, `state-5-workflows-explorer-${vp.name}.png`) });

        // State 6: Workflow builder result
        await page.locator('#problem-selector').scrollIntoViewIfNeeded();
        await page.locator('#problem-selector').selectOption('broken-scroll');
        await page.screenshot({ path: path.join(outputDir, `state-6-builder-result-${vp.name}.png`) });

        // State 7: Example projects
        await page.locator('#examples').scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(outputDir, `state-7-example-projects-${vp.name}.png`) });

        // State 8: Repository structure
        const structureSec = page.locator('#structure');
        await structureSec.scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(outputDir, `state-8-repository-structure-${vp.name}.png`) });

        // State 9: Mobile navigation (if mobile width)
        if (vp.width <= 768) {
          // scroll back to top
          await page.locator('header').scrollIntoViewIfNeeded();
          const toggle = page.locator('#menu-toggle');
          await toggle.click();
          await page.screenshot({ path: path.join(outputDir, `state-9-mobile-nav-${vp.name}.png`) });
          // close menu
          await toggle.click();
        }
      });
    });
  }
});
