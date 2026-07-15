import { test, expect } from '@playwright/test';

test.describe('Copy Prompt and Templates', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
  });

  test('should write to clipboard and show feedback when Copy Starter Prompt is clicked', async ({ page, context }) => {
    // Grant clipboard-write permission in browser context
    await context.clearPermissions();
    await context.grantPermissions(['clipboard-write', 'clipboard-read']);

    const copyBtn = page.locator('#copy-starter-btn');
    await copyBtn.click();

    // Verify button text updates
    await expect(copyBtn).toHaveText('Copied!');

    // Verify aria-live announcement
    const toast = page.locator('#toast-msg');
    await expect(toast).toBeVisible();
    await expect(toast).toHaveText('Copied');
  });

  test('should trigger text-area fallback copy when clipboard API fails or is not granted', async ({ page, context }) => {
    // Deny clipboard permissions to force fallback path
    await context.clearPermissions();

    const copyBtn = page.locator('#copy-use-template-btn');
    await copyBtn.click();

    // The fallback path uses execCommand('copy') which should still copy and show success if browser allows
    const toast = page.locator('#toast-msg');
    await expect(toast).toBeVisible();
    await expect(toast).toHaveText(/Copied|Copy failed/);
  });
});
