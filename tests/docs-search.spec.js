import { test, expect } from '@playwright/test';

test.describe('Search and Category Filters', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
  });

  test('should filter skills by name', async ({ page }) => {
    const search = page.locator('#search-input');
    await search.fill('designer-mobile');
    
    const cards = page.locator('.skill-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first().locator('.skill-title-text')).toHaveText('Mobile Design Reconstruction');
  });

  test('should filter skills by description', async ({ page }) => {
    const search = page.locator('#search-input');
    await search.fill('preserving the strongest parts of their identity');
    
    const cards = page.locator('.skill-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first().locator('.skill-title-text')).toHaveText('Creative Design Audit');
  });

  test('should filter skills by tag', async ({ page }) => {
    const search = page.locator('#search-input');
    await search.fill('wcag');
    
    const cards = page.locator('.skill-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first().locator('.skill-title-text')).toHaveText('Accessibility Auditing');
  });

  test('should filter skills by category buttons', async ({ page }) => {
    // Click Strategy & Design
    await page.click('button:has-text("Strategy & Design")');
    let cards = page.locator('.skill-card');
    await expect(cards).toHaveCount(4); // design-me, design-system-extractor, content-hierarchy, ux-conversion-strategist

    // Click Motion & Interaction
    await page.click('button:has-text("Motion & Interaction")');
    cards = page.locator('.skill-card');
    await expect(cards).toHaveCount(4); // 3d-animation, motion-architect, scroll-systems-engineer, route-transition-designer
  });

  test('should reset all filters and search input on Reset click', async ({ page }) => {
    const search = page.locator('#search-input');
    await search.fill('3d-animation');
    await page.click('button:has-text("Motion & Interaction")');

    const resetButton = page.locator('#reset-filters');
    await expect(resetButton).toBeVisible();
    await resetButton.click();

    await expect(search).toHaveValue('');
    await expect(page.locator('.skill-card')).toHaveCount(24);
  });

  test('should focus search input when "/" hotkey is pressed outside inputs', async ({ page }) => {
    const search = page.locator('#search-input');
    await expect(search).not.toBeFocused();

    await page.keyboard.press('/');
    await expect(search).toBeFocused();
  });

  test('should not hijack slash character when already typing in search input', async ({ page }) => {
    const search = page.locator('#search-input');
    await search.focus();
    
    await page.keyboard.type('test/');
    await expect(search).toHaveValue('test/');
  });
});
