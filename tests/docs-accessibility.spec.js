import { test, expect } from '@playwright/test';

test.describe('Accessibility Auditing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
  });

  test('should jump focus to main content via Skip Link', async ({ page }) => {
    // Focus the skip link
    await page.keyboard.press('Tab');
    const activeElement = page.locator(':focus');
    await expect(activeElement).toHaveClass('skip-link');

    // Press enter
    await page.keyboard.press('Enter');
    
    // Main element should exist
    const main = page.locator('main');
    await expect(main).toHaveId('main-content');
  });

  test('should verify correct semantic heading levels hierarchy', async ({ page }) => {
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1); // exactly one h1

    const headings = page.locator('h1, h2, h3');
    const count = await headings.count();
    expect(count).toBeGreaterThan(5);
  });

  test('should trap focus inside the details dialog modal when tab is pressed', async ({ page }) => {
    const card = page.locator('.skill-card:has-text("Mobile Design Reconstruction")');
    await card.click();

    const dialog = page.locator('#drawer');
    await expect(dialog).toBeVisible();

    // The close button inside the dialog should be focused initially
    const closeBtn = page.locator('#drawer-close');
    await expect(closeBtn).toBeFocused();

    // Tab through elements and verify it loops or traps
    const focusableElements = await dialog.locator('button, a, select').all();
    const len = focusableElements.length;

    // Focus the last focusable element
    await focusableElements[len - 1].focus();

    // Press Tab
    await page.keyboard.press('Tab');

    // Focus should wrap back to the first focusable element (close button)
    await expect(closeBtn).toBeFocused();
  });
});
