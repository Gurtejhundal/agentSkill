# VibeMaxing Design System

## Product Context

- Product: VibeMaxing, a searchable directory of reusable agent skills and workflow routes.
- Primary users: builders who know the website problem but need the right specialist, sequence, and proof loop.
- Primary tasks: find a skill, understand when to use it, compare companions, copy an actionable prompt, and browse design references.
- Device priority: mobile first for discovery; desktop for deeper reference research.

## Chosen Direction

- VibeMaxing portal: Brutalism.
- DesignMaxing module: Semi-flat design (Flat 2.0).
- Reason: the portal needs an unmistakable, memorable index; the reference module needs calm, dense, scannable comparison tools.
- Boundary: Brutalism is reserved for VibeMaxing navigation, hierarchy, and agent discovery. Semi-flat cards, segmentation, and previews are reserved for DesignMaxing.

## Visual Rules

### VibeMaxing

- Off-white canvas, black 3px borders, acid yellow and signal-red accents.
- Use hard offset shadows, square corners, oversized display headings, and plain-language labels.
- Never use glow, scanlines, glass effects, or decorative gradients in the portal.
- Search, filters, workflow routes, and drawers remain functional-first and legible.

### DesignMaxing

- Light blue-gray canvas, white panels, indigo interaction color, restrained soft elevation, and 10–18px radii.
- Show the selected style through its card treatment. For example, Neumorphism uses paired soft shadows; Brutalism uses hard borders; Glass uses translucent layers; Clay uses soft rounded material.
- Separate General and Mobile UI references before filtering. Mobile cards must communicate compact, touch-oriented patterns.
- Keep palette swatches copyable and typography previews readable; styling must never obscure the source data.

## Accessibility and Responsive Rules

- Maintain WCAG AA contrast and visible focus states.
- Buttons and filters are keyboard-operable and at least 44px high on touch layouts.
- At 360px, every grid collapses without horizontal scrolling. The DesignMaxing General/Mobile selector remains full-width and readable.
- Respect `prefers-reduced-motion`; interactions are short and never delay search or navigation.

## QA Checklist

- [x] VibeMaxing hero and DesignMaxing route tested.
- [x] General and Mobile DesignMaxing filters tested with correct 67 / 17 counts.
- [x] 360px, 768px, 1024px, and 1440px tested without horizontal overflow.
- [x] Dead DesignMaxing preview assets removed; browser console stayed clean during QA.
