# Contributing Guidelines

We welcome contributions to Website Agent Skills! Follow these steps to submit issues or propose changes.

## Proposing a New Skill

1. Copy the skill template from [SKILL_TEMPLATE.md](file:///e:/Code/models/AgentWorkload/agentSkill/templates/SKILL_TEMPLATE.md).
2. Create your folder under `agents/<skill-name>/` utilizing lowercase kebab-case.
3. Add `SKILL.md` defining triggers, mission, workflow, deliverables, and acceptance criteria.
4. Add `metadata.json` matching the [skill.schema.json](file:///e:/Code/models/AgentWorkload/agentSkill/schemas/skill.schema.json).
5. Add `examples.md` with simple, advanced, incorrect, and workflow examples.
6. Register the skill name in `manifest.json`.
7. Run validation and data compilation:
   ```bash
   npm run validate
   npm run build:docs
   npm run generate:index
   ```

## Development and Checks

We enforce syntax, reference checking, and static data alignment on all pull requests. Ensure these commands pass locally:

- **Validate skill schemas:** `npm run validate`
- **Check broken links:** `npm run check:links`
- **Build website JSON data:** `npm run build:docs`
- **Regenerate skill index:** `npm run generate:index`

## Pull Request Guidelines

- Verify your changes locally.
- Link your pull request to any active issue.
- Verify that GitHub Actions validations pass successfully.
