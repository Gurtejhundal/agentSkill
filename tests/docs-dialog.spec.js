import { test, expect } from '@playwright/test';

test.describe('Skill Dialog Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
  });

  test('should open dialog modal on card click', async ({ page }) => {
    const card = page.locator('.skill-card:has-text("Mobile Design Reconstruction")');
    await card.click();

    const dialog = page.locator('#drawer');
    await expect(dialog).toBeVisible();
    await expect(page.locator('#drawer-title')).toHaveText('Mobile Design Reconstruction');
  });

  test('should close modal on Escape key press', async ({ page }) => {
    const card = page.locator('.skill-card:has-text("Mobile Design Reconstruction")');
    await card.click();

    const dialog = page.locator('#drawer');
    await expect(dialog).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
  });

  test('should close modal on backdrop click', async ({ page }) => {
    const card = page.locator('.skill-card:has-text("Mobile Design Reconstruction")');
    await card.click();

    const dialog = page.locator('#drawer');
    await expect(dialog).toBeVisible();

    // Click outside the dialog geometry to click backdrop
    const boundingBox = await dialog.boundingBox();
    if (boundingBox) {
      // Click slightly to the left of the drawer
      await page.mouse.click(boundingBox.x - 20, boundingBox.y + 100);
    }
    await expect(dialog).not.toBeVisible();
  });

  test('should restore focus to the triggering card on close and restore URL hash', async ({ page }) => {
    const card = page.locator('.skill-card:has-text("Mobile Design Reconstruction")');
    await card.focus();
    await card.click();

    const closeButton = page.locator('#drawer-close');
    await closeButton.click();

    // Focus is restored to the triggering element
    await expect(card).toBeFocused();

    // Hash is restored
    const hash = await page.evaluate(() => window.location.hash);
    expect(hash).toBe('#skills');
  });

  test('should open skill details dialog directly from URL hash', async ({ page }) => {
    await page.goto('index.html#skill/3d-animation');
    const dialog = page.locator('#drawer');
    await expect(dialog).toBeVisible();
    await expect(page.locator('#drawer-title')).toHaveText('Purposeful 3D Animation');
  });
});
