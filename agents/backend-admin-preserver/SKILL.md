---
name: backend-admin-preserver
description: Protects CMS, Django Admin, database, and editable content flows during redesigns.
version: 1.0.0
tags:
  - backend
  - django
  - cms
---

# backend-admin-preserver

## Trigger
Use when content is managed through an admin panel or backend.

## Mission
Ensure visual changes do not hard-code or bypass content that must remain editable.

## Mandatory Inspection
Models, serializers, templates, APIs, media storage, admin fields, validation, permissions, caching, and content dependencies.

## Workflow
1. Map editable data.
2. Identify frontend consumers.
3. Preserve field contracts.
4. Add fields only when justified.
5. Provide migration and fallback behavior.
6. Test admin edits through frontend.
7. Verify permissions.

## Guardrails
- Do not replace backend data with static arrays.
- Do not expose admin routes.
- Do not break existing content during schema change.

## Deliverables
- Data-flow map
- Fields preserved or added
- Migration notes
- Admin test results
- Fallback behavior

## Acceptance Criteria
1. Existing content still renders.
2. New design remains editable.
3. Admin changes appear correctly.
4. Permissions remain intact.
5. No migration loses content.

## Handoff
Use `interaction-qa-agent` and `deployment-verifier`.
