<div align="center">

<img src="docs/readme/hero-animated.svg" width="100%" alt="Animated Website Agent Skills system banner" />

# Website Agent Skills

**A modular operating system of 24 specialist AI-agent skills for serious website design, responsive reconstruction, motion engineering, domain UX, testing, and production verification.**

[![Skills](https://img.shields.io/badge/SPECIALIST_SKILLS-24-00f0ff?style=for-the-badge&labelColor=050508)](agents)
[![Workflows](https://img.shields.io/badge/WORKFLOWS-8-ff2f88?style=for-the-badge&labelColor=050508)](workflows)
[![License](https://img.shields.io/badge/LICENSE-MIT-39ff14?style=for-the-badge&labelColor=050508)](LICENSE)
[![Portal](https://img.shields.io/badge/LIVE_PORTAL-OPEN-f2b84b?style=for-the-badge&labelColor=050508)](https://gurtejhundal.github.io/agentSkill/)

[**Open the interactive portal**](https://gurtejhundal.github.io/agentSkill/) · [Browse all skills](agents) · [View workflows](workflows) · [Use a request template](templates/AGENT_REQUEST_TEMPLATE.md)

</div>

---

## Why this repository exists

Generic coding agents often fail on complex website work for predictable reasons: they edit before understanding the codebase, treat mobile as a cropped desktop, force every image into one ratio, stack incompatible animation systems, ignore accessibility, and declare completion after a successful build without testing the actual interface or production deployment.

This repository replaces that vague “frontend agent” model with **small, explicit specialist roles**. Each skill defines:

- exactly when it should be activated;
- what it must inspect before changing code;
- a disciplined implementation workflow;
- shortcuts it is forbidden to take;
- measurable acceptance criteria;
- the evidence required before it can report completion;
- the next specialist to receive the handoff.

The result is not a collection of aesthetic prompts. It is an **agent execution framework** for moving from inspection to verified production output.

<img src="docs/readme/workflow-animated.svg" width="100%" alt="Animated specialist agent workflow" />

---

## Core operating model

```text
User request
     ↓
Codebase reconnaissance
     ↓
Design, responsive, motion, architecture, or domain specialist
     ↓
Focused implementation
     ↓
Visual, interaction, accessibility, and performance verification
     ↓
Production deployment verification
```

No specialist is allowed to skip directly from a vague request to “done.” The default sequence is:

```text
Inspect → Diagnose → Prioritize → Implement → Build → Test → Capture → Compare → Verify production
```

<img src="docs/readme/skills-matrix-animated.svg" width="100%" alt="Animated matrix of the six agent skill categories" />

---

## The 24 specialist skills

### Strategy and design

| Skill | Purpose |
|---|---|
| [`design-me`](agents/design-me) | Leads full visual audits and redesigns while preserving the strongest parts of the existing identity. It separates structural defects from decorative ones and produces implementation-ready direction. |
| [`design-system-extractor`](agents/design-system-extractor) | Studies an existing site or reference and converts typography, spacing, colour roles, components, and motion mechanics into reusable rules without cloning assets or identity. |
| [`content-hierarchy`](agents/content-hierarchy) | Decides what information belongs on each route, removes repetition, protects credibility content, and reorganizes sections around trust, evidence, understanding, and action. |
| [`ux-conversion-strategist`](agents/ux-conversion-strategist) | Defines primary and secondary conversions, CTA hierarchy, proof placement, friction reduction, and mobile action paths for commercial websites. |

### Responsive design and typography

| Skill | Purpose |
|---|---|
| [`designer-mobile`](agents/designer-mobile) | Reconstructs desktop experiences specifically for mobile rather than shrinking or cropping them. Handles safe areas, card dimensions, mobile type scales, touch behavior, and mobile-specific animation branches. |
| [`typography-director`](agents/typography-director) | Creates responsive and multilingual type systems, including optical pairing between Latin and Gurmukhi, fluid scales, controlled wrapping, fallback behavior, and mobile maximum sizes. |
| [`media-fit-specialist`](agents/media-fit-specialist) | Builds project-specific presentation rules for portrait, landscape, square, and custom artwork so images never stretch, expose accidental artboards, or lose important content. |
| [`component-refactor`](agents/component-refactor) | Converts brittle page code into reusable components and data-driven systems while preserving intentional editorial differences and animation ownership. |

### Motion and interaction

| Skill | Purpose |
|---|---|
| [`3d-animation`](agents/3d-animation) | Designs purposeful Three.js, React Three Fiber, Spline, CSS 3D, or pre-rendered spatial experiences with strict asset budgets, mobile fallbacks, and reduced-motion support. |
| [`motion-architect`](agents/motion-architect) | Establishes one coherent language for entrances, masks, image reveals, parallax, hover feedback, and cinematic section transitions instead of stacking unrelated effects. |
| [`scroll-systems-engineer`](agents/scroll-systems-engineer) | Builds and debugs pinned scenes, horizontal tracks, calculated snap states, GSAP ScrollTrigger, Lenis coordination, reverse scrolling, image readiness, and touch-specific timelines. |
| [`route-transition-designer`](agents/route-transition-designer) | Creates page transitions with visible cause and effect—typically through persistent navigation or shared-element geometry—while preserving history navigation, focus, and reduced motion. |

### Architecture and implementation systems

| Skill | Purpose |
|---|---|
| [`codebase-recon`](agents/codebase-recon) | Maps framework versions, routes, components, styles, data sources, animation libraries, backend integrations, tests, and deployment risk before any major modification begins. |
| [`backend-admin-preserver`](agents/backend-admin-preserver) | Protects Django Admin, CMS, database, API, permissions, and editable content flows so frontend redesigns do not replace operational data with static content. |
| [`asset-optimizer`](agents/asset-optimizer) | Audits images, SVG, video, posters, fonts, formats, responsive variants, preloads, and delivery sizes to reduce transferred bytes without damaging visual quality. |
| [`performance-optimizer`](agents/performance-optimizer) | Measures and improves loading, rendering, animation, layout stability, mobile runtime, bundle cost, scroll loops, filters, and image delivery while preserving design intent. |

### Domain UX specialists

| Skill | Purpose |
|---|---|
| [`automotive-ux`](agents/automotive-ux) | Structures premium detailing, ceramic coating, PPF, paint correction, package comparison, before-and-after proof, booking, WhatsApp, location, and local trust. |
| [`healthcare-ux`](agents/healthcare-ux) | Prioritizes emergency access, ambulance, OPD timings, doctors, departments, appointments, maps, bilingual readability, accessibility, and admin-managed hospital information. |
| [`portfolio-ux`](agents/portfolio-ux) | Optimizes professional positioning, selected work, archive density, project credibility, About evidence, recruiter/client scanning, motion restraint, and contact conversion. |
| [`seo-local-search`](agents/seo-local-search) | Implements route-specific metadata, canonical URLs, social previews, sitemaps, robots, structured data, local entity consistency, and service or department discoverability. |

### Quality and delivery

| Skill | Purpose |
|---|---|
| [`accessibility-auditor`](agents/accessibility-auditor) | Tests semantics, headings, keyboard operation, focus, dialogs, contrast, forms, touch targets, scroll traps, alternative text, and reduced-motion behavior. |
| [`visual-qa-agent`](agents/visual-qa-agent) | Uses screenshot matrices and animation-state captures to compare expected and actual layout, typography, spacing, media crop, fixed controls, and responsive output. |
| [`interaction-qa-agent`](agents/interaction-qa-agent) | Tests every click, tap, route, drawer, modal, form, keyboard action, browser-history path, reverse scroll, orientation change, and modified link behavior. |
| [`deployment-verifier`](agents/deployment-verifier) | Confirms that the correct commit, branch, Vercel or Pages project, environment, domain alias, assets, and runtime behavior are actually serving in production. |

> The source of truth for the complete inventory is [`manifest.json`](manifest.json), which currently declares **24 skills**, six categories, eight workflows, and three project examples.

---

## Ready-made workflows

| Workflow | Recommended sequence | Use it for |
|---|---|---|
| [Full Website Audit](workflows/full-website-audit.md) | `codebase-recon → design-me → domain specialist → designer-mobile → QA → deployment-verifier` | Repository-wide design and production audits |
| [Mobile Reconstruction](workflows/mobile-reconstruction.md) | `codebase-recon → designer-mobile → typography-director → media-fit-specialist → visual-qa-agent` | Oversized cards, broken mobile layout, lost animations |
| [Cinematic Motion](workflows/cinematic-motion.md) | `design-me → motion-architect → scroll-systems-engineer → performance-optimizer → QA` | Hero reveals, pinned stories, parallax, section takeovers |
| [Route Transition](workflows/route-transition.md) | `codebase-recon → route-transition-designer → interaction-qa-agent → deployment-verifier` | Shared-element navigation and persistent page chrome |
| [Automotive Website](workflows/automotive-workflow.md) | `automotive-ux → designer-mobile → ux-conversion-strategist → seo-local-search` | Detailing and premium automotive service businesses |
| [Healthcare Website](workflows/healthcare-workflow.md) | `healthcare-ux → accessibility-auditor → backend-admin-preserver → designer-mobile` | Hospitals, clinics, doctors, OPD, appointments, emergency |
| [Portfolio Website](workflows/portfolio-workflow.md) | `portfolio-ux → design-system-extractor → motion-architect → designer-mobile → QA` | Creative developer and designer portfolios |
| [Release Gate](workflows/release-gate.md) | `visual-qa-agent → interaction-qa-agent → accessibility-auditor → deployment-verifier` | Final evidence before production approval |

---

## Installation

Each folder under `agents/` is portable and self-contained. You do not need to install the documentation portal to use a skill.

### Antigravity global installation

Copy the required skill folder into the global skills directory:

```text
Windows: C:\Users\<username>\.gemini\config\skills\
macOS/Linux: ~/.gemini/config/skills/
```

Example:

```text
agents/designer-mobile
→
~/.gemini/config/skills/designer-mobile
```

Restart or open a new Antigravity session so it can discover the skill.

### Project-level installation

Create this directory in the target repository:

```text
.agents/skills/
```

Then copy only the skills needed by that project:

```text
.agents/skills/
├── codebase-recon/
├── designer-mobile/
├── scroll-systems-engineer/
└── visual-qa-agent/
```

This keeps the agent context focused and avoids loading unrelated roles.

---

## How to invoke a skill

```text
Use the <skill-name> skill.

PROJECT
<project name>

TARGET
<route, component, file, or URL>

CURRENT PROBLEM
<exact visible or technical failure>

DESIRED RESULT
<observable behavior>

CONSTRAINTS
- Do not modify:
- Preserve:
- Existing libraries:
- Required breakpoints:

REQUIRED TESTS
- Breakpoints:
- Input methods:
- Routes:
- Reduced motion:

REQUIRED REPORT
- Root cause
- Files changed
- Tests completed
- Screenshots
- Production status
- Remaining limitations
```

Full templates are available in [`templates/`](templates).

---

## Repository structure

```text
agentSkill/
├── agents/          # 24 portable specialist skill folders
├── workflows/       # Multi-agent execution pipelines
├── checklists/      # Design, mobile, animation, QA, SEO, and release gates
├── templates/       # Request, audit, workflow, and completion-report templates
├── schemas/         # Machine-readable validation schemas
├── examples/        # House of Details, Bibi Kaulan Ji Hospital, portfolio
├── docs/            # Offline-friendly interactive documentation portal
├── scripts/         # Validation and docs-data generation
├── manifest.json    # Canonical repository inventory
└── README.md
```

---

## Validation and documentation commands

```bash
npm run validate       # Validate skill folders and metadata
npm run generate:index # Rebuild SKILLS_INDEX.md
npm run build:docs     # Generate portal data and documentation output
npm run check:links    # Check internal repository links
```

The interactive portal provides search, skill details, workflow guidance, project examples, and ready-to-copy prompts:

### **[Launch AgentSkill Portal →](https://gurtejhundal.github.io/agentSkill/)**

---

## Contributing

New skills must define a narrow trigger, mandatory inspection, workflow, forbidden shortcuts, deliverables, acceptance criteria, and a clear handoff. Start with [`templates/SKILL_TEMPLATE.md`](templates/SKILL_TEMPLATE.md), follow [`CONTRIBUTING.md`](CONTRIBUTING.md), and run validation before opening a pull request.

---

## License and creator

Released under the [MIT License](LICENSE).

Created by **Gurtejbir Singh** · [Portfolio](https://gurtejbirsingh.vercel.app/) · [Interactive AgentSkill Portal](https://gurtejhundal.github.io/agentSkill/)
