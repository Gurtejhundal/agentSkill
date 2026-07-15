---
name: deployment-verifier
description: Verifies Git branch, production deployment, domain alias, logs, cache, and live-site behavior.
version: 1.0.0
tags:
  - vercel
  - deployment
  - production
---

# deployment-verifier

## Trigger
Use whenever local and live versions differ or before declaring release complete.

## Mission
Prove that the intended commit is serving on the intended domain and behaves correctly.

## Mandatory Inspection
Git commit, production branch, deployment status, domain assignment, build logs, environment variables, runtime errors, caching, asset paths, and live screenshots.

## Workflow
1. Identify expected commit.
2. Identify production project and domain.
3. Verify deployment status.
4. Inspect build and runtime logs.
5. Compare live and local screenshots.
6. Test critical routes.
7. Bypass stale cache where needed.
8. Report exact production state.

## Guardrails
- Do not assume local build means production is correct.
- Do not infer live code from one stale fetch without deployment verification.

## Deliverables
- Production verification
- Commit and deployment identifiers
- Domain mapping
- Log findings
- Live screenshots
- Remaining risks

## Acceptance Criteria
1. Correct commit is live.
2. Domain points to correct project.
3. Build succeeds.
4. Critical routes work.
5. No severe runtime errors.
6. Live screenshots match expected design.

## Handoff
Return production differences to the responsible implementation agent.
