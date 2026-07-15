import { test, expect } from '@playwright/test';

test.describe('Subpath Hosting Compatibility', () => {
  test('should load stylesheet, script files, and dynamic data successfully', async ({ page }) => {
    const failedRequests = [];
    page.on('requestfailed', request => {
      failedRequests.push(`${request.url()}: ${request.failure()?.errorText}`);
    });

    await page.goto('index.html');
    
    // Check for resource request failures
    expect(failedRequests).toEqual([]);

    // Check all 24 skills render under subpath
    const cards = page.locator('.skill-card');
    await expect(cards).toHaveCount(24);
  });

  test('should route links correctly to generated skill pages using relative links', async ({ page }) => {
    await page.goto('index.html');
    
    // Open designer-mobile details
    await page.locator('.skill-card:has-text("Mobile Design Reconstruction")').click();

    // Click link to generated static page
    const link = page.locator('#drawer a:has-text("View Full Skill Documentation")');
    await expect(link).toBeVisible();

    const href = await link.getAttribute('href');
    expect(href?.startsWith('/')).toBe(false); // Assert it is a relative link (no root-relative paths)
    
    // Verify it resolves and opens correctly
    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      link.click()
    ]);
    
    await newPage.waitForLoadState();
    
    // Verify skill page contents render
    await expect(newPage.locator('h1')).toHaveText('Mobile Design Reconstruction');
    
    // Check back link works relative path
    const backLink = newPage.locator('#back-link');
    await expect(backLink).toBeVisible();
    
    const backHref = await backLink.getAttribute('href');
    expect(backHref).toBe('../../index.html#skill/designer-mobile');
    
    await newPage.close();
  });
});
