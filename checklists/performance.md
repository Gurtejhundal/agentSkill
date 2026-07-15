# Performance Checklist

- [ ] Images, videos, and fonts are compressed and served in modern formats (WebP, AVIF, WOFF2).
- [ ] Responsive source sets (srcset) or image loaders supply optimized sizes per breakpoint.
- [ ] Layout shift is avoided by defining explicit dimensions (width/height) on elements.
- [ ] Animation loops and requestAnimationFrame loops are cleaned up and paused when offscreen.
- [ ] Critical assets (hero fonts, main images) are preloaded or prioritized.
- [ ] CSS animations are preferred over heavy JavaScript calculations where possible.
- [ ] Heavy features (WebGL, filters, blur) run under a strict performance budget on mobile.
- [ ] No duplicated global libraries or unnecessary heavy package scripts exist.
