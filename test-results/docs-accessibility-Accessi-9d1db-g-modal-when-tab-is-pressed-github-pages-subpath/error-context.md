# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: docs-accessibility.spec.js >> Accessibility Auditing >> should trap focus inside the details dialog modal when tab is pressed
- Location: tests\docs-accessibility.spec.js:31:3

# Error details

```
Error: expect(locator).toBeFocused() failed

Locator:  locator('#drawer-close')
Expected: focused
Received: inactive
Timeout:  5000ms

Call log:
  - Expect "toBeFocused" with timeout 5000ms
  - waiting for locator('#drawer-close')
    14 × locator resolved to <button id="drawer-close" class="drawer-close" aria-label="Close details">✕</button>
       - unexpected value "inactive"

```

```yaml
- button "Close details": ✕
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Accessibility Auditing', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('index.html');
  6  |   });
  7  | 
  8  |   test('should jump focus to main content via Skip Link', async ({ page }) => {
  9  |     // Focus the skip link
  10 |     await page.keyboard.press('Tab');
  11 |     const activeElement = page.locator(':focus');
  12 |     await expect(activeElement).toHaveClass('skip-link');
  13 | 
  14 |     // Press enter
  15 |     await page.keyboard.press('Enter');
  16 |     
  17 |     // Main element should exist
  18 |     const main = page.locator('main');
  19 |     await expect(main).toHaveId('main-content');
  20 |   });
  21 | 
  22 |   test('should verify correct semantic heading levels hierarchy', async ({ page }) => {
  23 |     const h1Count = await page.locator('h1').count();
  24 |     expect(h1Count).toBe(1); // exactly one h1
  25 | 
  26 |     const headings = page.locator('h1, h2, h3');
  27 |     const count = await headings.count();
  28 |     expect(count).toBeGreaterThan(5);
  29 |   });
  30 | 
  31 |   test('should trap focus inside the details dialog modal when tab is pressed', async ({ page }) => {
  32 |     const card = page.locator('.skill-card:has-text("Mobile Design Reconstruction")');
  33 |     await card.click();
  34 | 
  35 |     const dialog = page.locator('#drawer');
  36 |     await expect(dialog).toBeVisible();
  37 | 
  38 |     // The close button inside the dialog should be focused initially
  39 |     const closeBtn = page.locator('#drawer-close');
  40 |     await expect(closeBtn).toBeFocused();
  41 | 
  42 |     // Tab through elements and verify it loops or traps
  43 |     const focusableElements = await dialog.locator('button, a, select').all();
  44 |     const len = focusableElements.length;
  45 | 
  46 |     // Focus the last focusable element
  47 |     await focusableElements[len - 1].focus();
  48 | 
  49 |     // Press Tab
  50 |     await page.keyboard.press('Tab');
  51 | 
  52 |     // Focus should wrap back to the first focusable element (close button)
> 53 |     await expect(closeBtn).toBeFocused();
     |                            ^ Error: expect(locator).toBeFocused() failed
  54 |   });
  55 | });
  56 | 
```