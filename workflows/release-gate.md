# Release Gate Workflow

Validates visual regression, interaction, SEO, and production deployment before final delivery.

## Sequence
`accessibility-auditor → performance-optimizer → visual-qa-agent → interaction-qa-agent → seo-local-search → deployment-verifier`

## Primary Focus
- Verify keyboard layout, semantic HTML, and text contrast
- Check loading performance and asset budgets
- Validate visual layout across all breakpoints (1440px down to 390px)
- Perform full interaction gesture test
- Verify sitemaps, robots.txt, metadata, and production deployment aliases
