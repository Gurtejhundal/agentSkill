import { test, expect } from '@playwright/test';

test.describe('Mobile Viewport & Interaction', () => {
  test.use({ viewport: { width: 390, height: 844 } }); // iPhone 13/14 mobile viewport

  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
  });

  test('should not show horizontal scrollbar on mobile width', async ({ page }) => {
    const overflowX = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    expect(overflowX).toBe(false); // No horizontal layout overflow
  });

  test('should toggle mobile navigation menu and lock body scroll', async ({ page }) => {
    const menuToggle = page.locator('#menu-toggle');
    const navMenu = page.locator('#nav-menu');

    await expect(menuToggle).toBeVisible();
    await expect(navMenu).not.toBeVisible();

    // Open menu
    await menuToggle.click();
    await expect(navMenu).toBeVisible();

    // Verify body scroll is locked
    const overflowStyle = await page.evaluate(() => document.body.style.overflow);
    expect(overflowStyle).toBe('hidden');

    // Close menu
    await menuToggle.click();
    await expect(navMenu).not.toBeVisible();
  });

  test('should toggle repository structure file tree', async ({ page }) => {
    const treeToggle = page.locator('button.tree-toggle:has-text("agents/")');
    const details = page.locator('#desc-agents');

    await expect(details).not.toBeVisible();

    await treeToggle.click();
    await expect(details).toBeVisible();

    await treeToggle.click();
    await expect(details).not.toBeVisible();
  });

  test('should close mobile navigation menu when Escape key is pressed', async ({ page }) => {
    const menuToggle = page.locator('#menu-toggle');
    const navMenu = page.locator('#nav-menu');

    await menuToggle.click();
    await expect(navMenu).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(navMenu).not.toBeVisible();
  });
});
