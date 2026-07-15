---
name: design-maxing
description: AI-powered design intelligence providing 84 UI styles, 161 color palettes, 73 font pairings, and stack-specific design systems.
---

# 🧬 DesignMaxing Design Intelligence

Use this module to inject professional design systems, colors, typography, layout patterns, and animations based on the `ui-ux-pro-max-skill` database.

---

## ⚡ Core Directives

1. **Design System First**: Before starting any UI/UX or coding task, run the design system generator command using a descriptive query representing the project niche.
2. **Retrieve Tokens & Rules**: Extract color hex codes, font pairings, visual effects, and framework-specific instructions directly from the generator results.
3. **Respect Dials**: 
   - Use `--variance` to dial in bold/asymmetrical vs minimal structures.
   - Use `--motion` to inject GSAP animations and stagger effects.
   - Use `--density` to adjust visual density for dashboards vs landing pages.
4. **Enforce the Pre-Delivery Checklist**: Before marking any task complete, verify contrast ratios, touch targets, cursor pointers, transitions, and responsive limits.

---

## 🚦 Command Execution Guide

To query design tokens or compile a project-wide design system, execute the python runner from the repository root:

### 1. Generate Project Design System
Generates the core styling, color palettes, fonts, effects, and checklist:
```bash
python agents/design-maxing/scripts/search.py "crypto trading dashboard" --design-system -p "VibeCrypto" --format markdown
```

### 2. Persist to Repository Structure
Saves a global `MASTER.md` file in your project under `design-system/` for continuous alignment:
```bash
python agents/design-maxing/scripts/search.py "fitness SaaS app" --design-system -p "FitVibe" --persist --output-dir "."
```

### 3. Generate Page-Specific Overrides
To keep the master style system clean while introducing page-specific components, generate a page override:
```bash
python agents/design-maxing/scripts/search.py "pricing cards" --design-system -p "FitVibe" --persist --page "pricing" --output-dir "."
```

### 4. Search Specific Domains
Directly query details from specific styling databases:
```bash
# Query UI Styles
python agents/design-maxing/scripts/search.py "glassmorphism" --domain style

# Query Fonts
python agents/design-maxing/scripts/search.py "serif elegance" --domain typography

# Query Stack Guidelines
python agents/design-maxing/scripts/search.py "performance optimization" --stack react
```

---

## 🚦 Integration Workflow

1. **Recon & Ingest**: Run `python agents/design-maxing/scripts/search.py "<project niche>" --design-system -p "<ProjectName>"`
2. **Setup Tailwind / CSS variables**: Translate the extracted colors table into CSS custom variables or the `tailwind.config.js` theme block.
3. **Typography setup**: Inject the Google Font `@import` or `<link>` tags and configure family names.
4. **Write layouts & motion**: Use the section patterns and GSAP snippets to write structure and motion curves.
