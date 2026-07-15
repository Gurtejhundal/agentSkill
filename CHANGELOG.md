# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-07-15

### Added
- Created a polished, offline-capable static documentation portal at `docs/index.html` mapping skills, workflows, examples, and builders.
- Populated `metadata.json` files for all 24 skills containing tags, categories, useWhen, avoidWhen, inputs, and outputs.
- Added `examples.md` files for all 24 skills featuring simple, advanced, incorrect, and multi-agent workflow request prompts.
- Added custom validation script `scripts/validate-skills.mjs` checking directory matching, kebab-case, manifest counts, and fields.
- Added link-check script `scripts/check-links.mjs` scanning markdown and HTML targets.
- Added documentation build script `scripts/build-docs-data.mjs` mapping variables to static JSON databases in `docs/data/`.
- Created `.github/workflows/validate.yml` for automated CI build and syntax validation.
- Created `.github/workflows/deploy-docs.yml` utilizing GitHub Actions pages to deploy the docs folder automatically.
- Created issue templates (`bug-report.md`, `new-skill.md`, `improvement.md`) and a pull request template in `.github/`.
- Added new schemas `workflow.schema.json` and `completion-report.schema.json` inside `schemas/`.
- Added template prompt structures `AGENT_REQUEST_TEMPLATE.md`, `COMPLETION_REPORT_TEMPLATE.md`, `WEBSITE_AUDIT_TEMPLATE.md`, and `WORKFLOW_TEMPLATE.md`.
- Split domain-specific flows into separate files (`automotive-workflow.md`, `healthcare-workflow.md`, `portfolio-workflow.md`, `route-transition.md`) and added `workflow-index.json`.
- Added missing checklists (`design.md`, `accessibility.md`, `performance.md`, `seo.md`, `interaction-qa.md`, `visual-qa.md`).

### Changed
- Simplified root `README.md` to be concise (~1,500 words) focusing on quick start, structure, and pipelines.
- Regenerated `SKILLS_INDEX.md` grouping all skills by category with metadata summary points.
