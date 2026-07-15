import { test, expect } from '@playwright/test';

test.describe('Workflows and Builder', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
  });

  test('should open skill details modal when workflow node is clicked', async ({ page }) => {
    const firstWorkflowNode = page.locator('.workflow-card').first().locator('button.workflow-node-link').first();
    const nodeText = await firstWorkflowNode.textContent();

    await firstWorkflowNode.click();

    const dialog = page.locator('#drawer');
    await expect(dialog).toBeVisible();
    await expect(page.locator('#drawer-title')).toHaveText(nodeText);
  });

  test('should update sequence nodes list in Workflow Builder on option selection', async ({ page }) => {
    const selector = page.locator('#problem-selector');
    await selector.selectOption('broken-scroll');

    const builderNodes = page.locator('#builder-flow-nodes button');
    await expect(builderNodes).toHaveCount(5);
    await expect(builderNodes.first()).toHaveText('Codebase Reconnaissance');
    await expect(builderNodes.nth(1)).toHaveText('Scroll Systems Engineering');
  });

  test('should generate valid workflow prompt matching config in Workflow Builder', async ({ page }) => {
    const selector = page.locator('#problem-selector');
    await selector.selectOption('broken-scroll');

    const promptText = await page.locator('#builder-prompt-code').textContent();
    expect(promptText).toContain('SELECTED PROBLEM:\nBROKEN SCROLL');
    expect(promptText).toContain('codebase-recon → scroll-systems-engineer → designer-mobile → performance-optimizer → visual-qa-agent');
  });
});
