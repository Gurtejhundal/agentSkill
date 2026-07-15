# 🎨 VibeMaxing Design Systems Examples

Here are reference setups for translating the VibeMaxing intelligence engine output into code.

---

## ⚡ Example A: Cyberpunk Neon Web UI

This layout uses a dark dashboard layout with high-intensity neon accent highlights.

### 1. Generated Tokens
* **Primary**: `#00FFCC` (Cyan)
* **Secondary**: `#FF007F` (Neon Pink)
* **Accent**: `#9D4EDD` (Tech Purple)
* **Background**: `#0A0E17` (Deep Cyber Black)
* **Foreground**: `#E2E8F0` (Off-White)

### 2. Stylesheet (`index.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Rajdhani:wght@500;700&display=swap');

:root {
  --color-primary: #00ffcc;
  --color-secondary: #ff007f;
  --color-accent: #9d4edd;
  --color-background: #0a0e17;
  --color-foreground: #e2e8f0;
  
  --font-heading: 'Rajdhani', sans-serif;
  --font-body: 'Fira Code', monospace;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-body);
}

.cyber-card {
  border: 1px solid var(--color-accent);
  background: rgba(10, 14, 23, 0.8);
  box-shadow: 0 0 15px rgba(157, 78, 221, 0.2);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.cyber-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
}

.btn-cyber {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.5rem 1.5rem;
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.btn-cyber:hover {
  background: var(--color-primary);
  color: var(--color-background);
  box-shadow: 0 0 10px var(--color-primary);
}
```

---

## ❄️ Example B: Glassmorphism SaaS Card (Tailwind CSS)

This layout uses a clean, modern frosted glass layout with subtle backdrop blurs and gradients.

### 1. Generated Tokens
* **Primary**: `#6366F1` (Indigo)
* **Secondary**: `#EC4899` (Pink)
* **Background**: `#F8FAFC` (Slate 50)
* **Frosted Layer**: `rgba(255, 255, 255, 0.7)`

### 2. Component Code (HTML/Tailwind)
```html
<div class="relative min-h-screen bg-slate-50 flex items-center justify-center overflow-hidden">
  <!-- Decorative gradient background blobs -->
  <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
  <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>

  <!-- Frosted Glass Card -->
  <div class="relative w-full max-w-md p-8 bg-white/70 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
    <div class="flex items-center space-x-4 mb-6">
      <span class="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
        <!-- SVG Icon -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
      </span>
      <h3 class="text-xl font-bold text-slate-800">VibeMaxing Pro</h3>
    </div>
    
    <p class="text-slate-600 mb-6 leading-relaxed">
      Frosted layers, soft shadows, and backdrop-blurs create high visual quality design.
    </p>
    
    <button class="w-full py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer">
      Start Designing
    </button>
  </div>
</div>
```
