# Design System — Agent Skills Portal

## Product Context

- Product: interactive catalog for reusable website-agent skills and workflows
- Primary users: builders who know their website problem but not the right specialist or sequence
- Primary tasks: find a skill, understand its scope, compare companion skills, copy a prompt, and follow a workflow
- Business goal: make the skill library memorable and immediately actionable
- Device priority: mobile first, then desktop research sessions
- Trust level: high; users must see honest boundaries and real repository references

## Chosen Direction

- Primary UI style: Cyberpunk / Acid Graphic
- Secondary influence: Flat Design 2.0 for discovery and dense content
- Style ratio: 70 / 30
- Reason: the cyberpunk layer makes the catalog memorable; restrained utility patterns keep search, comparisons, and reading usable
- Main risks: glow, scanlines, and stylized type can reduce readability or mobile performance
- Strongest areas: hero, story rail, Vibe Maxing Lab, workflow status visuals
- Restrained areas: filters, skill details, prompts, and long-form reference data

## Visual Principles

1. Start from the user’s job, not a wall of skills.
2. Use neon accents as wayfinding, never as body-text decoration.
3. Give every skill a clear use boundary and companion comparison.
4. Turn the collection into a narrative from discovery to verification.
5. Keep all interactive controls readable, focusable, and touch-safe.

## Tokens

- Background: `#050508`; surface: `#0c0d14`; elevated surface: `#121421`
- Text: `#d1d5db`; muted text: `#6f7587`; border: `rgba(0,240,255,.24)`
- Primary: `#00f0ff`; secondary: `#ff007f`; success: `#39ff14`
- Interface font: Consolas, Courier New, monospace; body line-height: 1.5
- Base spacing: 4px; section spacing: 64px desktop / 40px mobile; card padding: 20px
- Max content width: 1200px; breakpoints: 360px, 768px, 1024px, 1440px
- Radius: 0–4px only; no soft cards or pill-heavy UI
- Motion: 150ms interactions, 250ms panels; respect `prefers-reduced-motion`

## Component Rules

- Search and filters use flat high-contrast surfaces, clear labels, and a visible reset state.
- Skill cards show category, purpose, tags, and companion count; details expose use, avoid, inputs, outputs, companions, and a source link.
- The story rail must collapse into an ordered vertical flow below 768px.
- Vibe Maxing is a dedicated comparison lab, not a decorative marketing detour.
- Buttons remain at least 44px tall on touch layouts and show a cyan focus ring.

## Accessibility and Responsive Rules

- Maintain WCAG AA contrast; do not use color as the only category signal.
- Keyboard-accessible cards and dialogs need visible focus and Escape close behavior.
- At mobile widths, stack story, stats, Vibe Maxing content, and cards; never force horizontal scrolling.
- Disable nonessential animation and scanline distraction for reduced-motion users.

## Forbidden Patterns

- Fake counters, testimonials, metrics, or progress indicators
- Full-screen blur, decorative gradients with no informational role, or low-contrast neon body text
- Decorative motion that delays search, prompt copying, or navigation
- Generic cards that omit when to use and when not to use a skill

## QA Checklist

- [x] 360px, 768px, 1024px, and 1440px tested
- [x] Search, filters, drawer, workflow builder, and Vibe Maxing link tested
- [x] Keyboard focus and Escape tested; reduced-motion behavior is defined in CSS
- [ ] All repository links and generated data verified
- [ ] No horizontal overflow or console errors
