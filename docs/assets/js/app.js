// Pure Vanilla JS App for Documentation Website

let skillsData = [];
let workflowsData = {};
let examplesData = [];

// DOM Elements
const skillsGrid = document.getElementById('skills-grid');
const searchInput = document.getElementById('search-input');
const categoriesList = document.getElementById('categories-list');
const resultsCount = document.getElementById('results-count');
const resetFilters = document.getElementById('reset-filters');

const drawer = document.getElementById('drawer');
const drawerTitle = document.getElementById('drawer-title');
const drawerContent = document.getElementById('drawer-content');
const drawerClose = document.getElementById('drawer-close');

const workflowsGrid = document.getElementById('workflows-grid');
const examplesGrid = document.getElementById('examples-grid');

const problemSelector = document.getElementById('problem-selector');
const builderFlowNodes = document.getElementById('builder-flow-nodes');
const builderPromptCode = document.getElementById('builder-prompt-code');
const copyWorkflowBtn = document.getElementById('copy-workflow-btn');

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

const copyStarterBtn = document.getElementById('copy-starter-btn');
const copyUseTemplateBtn = document.getElementById('copy-use-template-btn');
const toastMsg = document.getElementById('toast-msg');

let lastActiveElement = null; // For focus restoration

// Workflow Builder Maps
const builderMap = {
  "full-redesign": {
    sequence: ["codebase-recon", "design-me", "design-system-extractor", "content-hierarchy", "designer-mobile", "motion-architect", "visual-qa-agent", "deployment-verifier"],
    prompt: "I want to do a full redesign of the website.\nFollow the Full Website Audit workflow.\nEnsure visual-qa-agent captures both desktop and mobile viewports."
  },
  "mobile-opt": {
    sequence: ["codebase-recon", "designer-mobile", "typography-director", "scroll-systems-engineer", "visual-qa-agent"],
    prompt: "The desktop experience is solid, but mobile layouts are broken.\nUse designer-mobile and scroll-systems-engineer to rebuild responsive tracks."
  },
  "broken-scroll": {
    sequence: ["codebase-recon", "scroll-systems-engineer", "designer-mobile", "performance-optimizer", "visual-qa-agent"],
    prompt: "The scroll animation stutters and snaps aggressively.\nUse scroll-systems-engineer and performance-optimizer to debug the timelines."
  },
  "image-fitting": {
    sequence: ["codebase-recon", "media-fit-specialist", "asset-optimizer", "visual-qa-agent"],
    prompt: "Project cards crop images inconsistently.\nUse media-fit-specialist and asset-optimizer to build responsive source aspect-ratios."
  },
  "page-transition": {
    sequence: ["codebase-recon", "route-transition-designer", "motion-architect", "interaction-qa-agent"],
    prompt: "The page transition feels cheap and generic.\nUse route-transition-designer to build shared-element morphing transitions."
  },
  "accessibility": {
    sequence: ["codebase-recon", "accessibility-auditor", "designer-mobile", "interaction-qa-agent"],
    prompt: "The website needs a full accessibility review.\nUse accessibility-auditor to check keyboard, contrast, and focus states."
  },
  "performance": {
    sequence: ["codebase-recon", "performance-optimizer", "asset-optimizer", "deployment-verifier"],
    prompt: "The website scores low on load speeds.\nUse performance-optimizer and asset-optimizer to compress fonts and bundle assets."
  },
  "local-biz": {
    sequence: ["codebase-recon", "automotive-ux", "ux-conversion-strategist", "seo-local-search", "deployment-verifier"],
    prompt: "A local detailing business needs high-converting booking pages.\nUse automotive-ux and seo-local-search to build trust and metadata."
  },
  "hospital-ux": {
    sequence: ["codebase-recon", "healthcare-ux", "accessibility-auditor", "backend-admin-preserver", "designer-mobile"],
    prompt: "Hospital portal redesign needs emergency info, doctors, and editable OPD tables.\nUse healthcare-ux and backend-admin-preserver."
  },
  "portfolio-ux": {
    sequence: ["codebase-recon", "portfolio-ux", "motion-architect", "route-transition-designer", "designer-mobile"],
    prompt: "I need to optimize my developer portfolio.\nUse portfolio-ux and motion-architect to coordinate editorial styling and morphing layouts."
  },
  "deployment-mismatch": {
    sequence: ["codebase-recon", "deployment-verifier"],
    prompt: "The live production deployment is missing CSS styles or assets compared to local build.\nUse deployment-verifier to check logs."
  }
};

// Fetch data on Load
async function init() {
  // Try loading from generated window data (offline support)
  if (window.WEBSITE_AGENT_DATA) {
    console.log('Loading database synchronously from window.WEBSITE_AGENT_DATA');
    skillsData = window.WEBSITE_AGENT_DATA.skills;
    workflowsData = window.WEBSITE_AGENT_DATA.workflows;
    examplesData = window.WEBSITE_AGENT_DATA.examples;
    onDataLoaded();
  } else {
    // Fallback fetch (useful for development)
    console.log('Loading database asynchronously via fetch fallback');
    try {
      const [resSkills, resWorkflows, resExamples] = await Promise.all([
        fetch('data/skills.json').then(r => r.json()),
        fetch('data/workflows.json').then(r => r.json()),
        fetch('data/examples.json').then(r => r.json())
      ]);

      skillsData = resSkills;
      workflowsData = resWorkflows;
      examplesData = resExamples;

      onDataLoaded();
    } catch (err) {
      console.error('Error loading static JSON databases:', err);
    }
  }
}

function onDataLoaded() {
  renderSkills();
  renderWorkflows();
  renderExamples();
  setupEventListeners();
  handleHashChange(); // Handle initial route if any
}

// Render Skills
let activeCategory = 'all';
let searchQuery = '';

function renderSkills() {
  skillsGrid.innerHTML = '';
  
  const filtered = skillsData.filter(s => {
    const matchCat = activeCategory === 'all' || s.category === activeCategory;
    
    const query = searchQuery.toLowerCase();
    const matchSearch = !query || 
      s.name.toLowerCase().includes(query) ||
      s.title.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query) ||
      s.category.toLowerCase().includes(query) ||
      s.tags.some(t => t.toLowerCase().includes(query)) ||
      s.useWhen.some(u => u.toLowerCase().includes(query)) ||
      s.outputs.some(o => o.toLowerCase().includes(query));
      
    return matchCat && matchSearch;
  });

  resultsCount.textContent = `${filtered.length} skill${filtered.length !== 1 ? 's' : ''} visible`;
  if (activeCategory !== 'all' || searchQuery) {
    resetFilters.style.display = 'inline-block';
  } else {
    resetFilters.style.display = 'none';
  }

  if (filtered.length === 0) {
    skillsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">No matching skills found.</div>`;
    return;
  }

  filtered.forEach(s => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${s.title}`);
    
    // Category label mapping
    const categoryLabels = {
      'strategy': 'Strategy & Design',
      'responsive': 'Responsive & Typography',
      'motion': 'Motion & Interaction',
      'architecture': 'Architecture',
      'domain-ux': 'Domain UX',
      'quality-delivery': 'Quality & Delivery'
    };

    const tagsHtml = s.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="skill-card-header">
        <span class="skill-cat-tag">${categoryLabels[s.category] || s.category}</span>
        <h3 class="skill-title-text">${s.title}</h3>
        <span class="skill-name-code">agents/${s.name}</span>
      </div>
      <p class="skill-desc">${s.description}</p>
      <div class="skill-tags">
        ${tagsHtml}
      </div>
      <div class="skill-card-footer">
        <span class="companion-info">${s.recommendedWith.length} companion skill${s.recommendedWith.length !== 1 ? 's' : ''}</span>
        <span class="card-action-link">Details →</span>
      </div>
    `;

    card.addEventListener('click', () => openSkillDetail(s.name));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openSkillDetail(s.name);
      }
    });

    skillsGrid.appendChild(card);
  });
}

// Open Skill Detail Modal Dialog
function openSkillDetail(name) {
  const s = skillsData.find(item => item.name === name);
  if (!s) return;

  lastActiveElement = document.activeElement;

  drawerTitle.textContent = s.title;
  
  const useWhenList = s.useWhen.map(u => `<li>${u}</li>`).join('');
  const avoidWhenList = s.avoidWhen.map(a => `<li>${a}</li>`).join('');
  const inputsList = s.inputs.map(i => `<li>${i}</li>`).join('');
  const outputsList = s.outputs.map(o => `<li>${o}</li>`).join('');
  const companionList = s.recommendedWith.map(rec => {
    const companionObj = skillsData.find(item => item.name === rec);
    const title = companionObj ? companionObj.title : rec;
    return `<li><a href="#skill/${rec}" style="color: var(--accent-wine); text-decoration: underline;" onclick="window.appOpenSkill('${rec}')">${title}</a></li>`;
  }).join('');

  const promptText = `Use the ${s.name} skill.\n\nPROJECT\n[Your Project Name]\n\nTARGET\n[Target Route/Component]\n\nCURRENT PROBLEM\n[Provide the exact failure details]\n\nDESIRED RESULT\n[Explain the observable behavior]`;

  drawerContent.innerHTML = `
    <div>
      <span class="skill-cat-tag" style="margin-bottom: 0.25rem;">agents/${s.name}</span>
      <p class="body-text">${s.description}</p>
    </div>

    <div>
      <h3 class="drawer-section-title">When to use</h3>
      <ul class="drawer-bullets">${useWhenList}</ul>
    </div>

    ${avoidWhenList ? `
    <div>
      <h3 class="drawer-section-title">Avoid when</h3>
      <ul class="drawer-bullets">${avoidWhenList}</ul>
    </div>
    ` : ''}

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div>
        <h3 class="drawer-section-title">Primary Inputs</h3>
        <ul class="drawer-bullets">${inputsList}</ul>
      </div>
      <div>
        <h3 class="drawer-section-title">Main Outputs</h3>
        <ul class="drawer-bullets">${outputsList}</ul>
      </div>
    </div>

    ${companionList ? `
    <div>
      <h3 class="drawer-section-title">Recommended Companion Skills</h3>
      <ul class="drawer-bullets">${companionList}</ul>
    </div>
    ` : ''}

    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <h3 class="drawer-section-title" style="margin-bottom: 0; border: none; padding: 0;">Sample Prompt</h3>
        <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.7rem; min-height: auto;" onclick="window.appCopyPrompt(\`${promptText}\`, this)">Copy Prompt</button>
      </div>
      <div class="drawer-code-block">
        <code style="white-space: pre-wrap;">${promptText}</code>
      </div>
    </div>

    <div style="margin-top: 1rem; border-top: 1px solid var(--border-light); padding-top: 1.5rem;">
      <a href="skills/${s.name}/index.html" class="btn btn-secondary" target="_blank" style="width: 100%;">View Full Skill Documentation</a>
    </div>
  `;

  // Open native <dialog> Modal
  if (typeof drawer.showModal === 'function') {
    drawer.showModal();
  } else {
    // Fallback
    drawer.setAttribute('open', 'true');
  }

  document.body.style.overflow = 'hidden'; // Scroll lock

  // Set URL Hash without triggering full reload
  window.history.pushState(null, null, `#skill/${s.name}`);

  // Manage Focus
  drawerClose.focus();
}

// Window Global handles for inline click triggers
window.appOpenSkill = function(name) {
  openSkillDetail(name);
};

window.appCopyPrompt = function(text, btn) {
  copyTextToClipboard(text, btn);
};

// Close Drawer Modal
function closeDrawer() {
  if (typeof drawer.close === 'function') {
    drawer.close();
  } else {
    drawer.removeAttribute('open');
    // Dispatch custom close behavior manually if close isn't supported
    const closeEvent = new CustomEvent('close');
    drawer.dispatchEvent(closeEvent);
  }
}

// Render Workflows
function renderWorkflows() {
  workflowsGrid.innerHTML = '';
  
  Object.keys(workflowsData).forEach(key => {
    const w = workflowsData[key];
    const card = document.createElement('div');
    card.className = 'workflow-card';

    // Build flow nodes HTML
    const nodesHtml = w.steps.map((step, idx) => {
      const skillObj = skillsData.find(item => item.name === step);
      const title = skillObj ? skillObj.title : step;
      
      let arrow = '';
      if (idx < w.steps.length - 1) {
        arrow = `<div class="workflow-arrow-down">↓</div>`;
      }

      return `
        <button class="workflow-node-link" onclick="window.appOpenSkill('${step}')" aria-label="Open ${title} details">${title}</button>
        ${arrow}
      `;
    }).join('');

    card.innerHTML = `
      <h3 class="card-heading">${w.name}</h3>
      <p class="body-text" style="font-size: 0.9rem; margin-bottom: 1.5rem;">${w.description}</p>
      <div class="workflow-steps-flow">
        ${nodesHtml}
      </div>
    `;
    workflowsGrid.appendChild(card);
  });
}

// Render Examples Case Studies
function renderExamples() {
  examplesGrid.innerHTML = '';
  
  examplesData.forEach(ex => {
    const card = document.createElement('div');
    card.className = 'example-card';

    // Parse description from readme
    let description = "Project Case Study";
    const descMatch = ex.readme.match(/# (.*?)\n\n(.*?)\n/);
    if (descMatch && descMatch[2]) {
      description = descMatch[2];
    }

    card.innerHTML = `
      <div>
        <h3 class="card-heading">${ex.title}</h3>
        <p>${description}</p>
      </div>
      <button class="btn btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="window.appOpenExample('${ex.id}')">View Project Plan</button>
    `;
    examplesGrid.appendChild(card);
  });
}

// Open Example Details in Drawer Dialog
window.appOpenExample = function(id) {
  const ex = examplesData.find(item => item.id === id);
  if (!ex) return;

  lastActiveElement = document.activeElement;

  drawerTitle.textContent = ex.title + " Plan";
  drawerContent.innerHTML = `
    <div>
      <h3 class="drawer-section-title">Project Context & Risks</h3>
      <div class="body-text" style="font-size: 0.95rem; margin-bottom: 1.5rem; white-space: pre-wrap;">${ex.readme}</div>
    </div>
    
    <div>
      <h3 class="drawer-section-title">Recommended Skill Sequence</h3>
      <div class="drawer-code-block" style="margin-bottom: 1.5rem;">
        <code style="white-space: pre-wrap;">${ex.plan}</code>
      </div>
    </div>

    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <h3 class="drawer-section-title" style="margin-bottom: 0; border: none; padding: 0;">Sample Prompts</h3>
        <button class="btn btn-secondary" style="padding: 0.25rem 0.5rem; font-size: 0.7rem; min-height: auto;" onclick="window.appCopyPrompt(\`${ex.prompts}\`, this)">Copy Prompt</button>
      </div>
      <div class="drawer-code-block">
        <code style="white-space: pre-wrap;">${ex.prompts}</code>
      </div>
    </div>
  `;

  if (typeof drawer.showModal === 'function') {
    drawer.showModal();
  } else {
    drawer.setAttribute('open', 'true');
  }
  document.body.style.overflow = 'hidden';
  drawerClose.focus();
};

// Workflow Builder Handler
function updateWorkflowBuilder() {
  const selected = problemSelector.value;
  const config = builderMap[selected];
  if (!config) return;

  // Render Nodes
  builderFlowNodes.innerHTML = config.sequence.map(step => {
    const skillObj = skillsData.find(item => item.name === step);
    const title = skillObj ? skillObj.title : step;
    return `<button class="workflow-node-link" style="padding: 0.35rem 0.7rem; font-size: 0.8rem;" onclick="window.appOpenSkill('${step}')">${title}</button>`;
  }).join('<span style="align-self: center; color: var(--text-secondary);">→</span>');

  // Format prompt
  const sequenceStr = config.sequence.join(' → ');
  const promptTemplate = `SELECTED PROBLEM:\n${selected.replace('-', ' ').toUpperCase()}\n\nRECOMMENDED SEQUENCE:\n${sequenceStr}\n\nWORKFLOW INSTRUCTIONS:\n${config.prompt}\n\nREQUIRED EVIDENCE:\n- Files changed list\n- Desktop & mobile layout screenshots\n- Interaction test outcomes\n- Performance runtime logs\n- Production live deployment URL verification`;
  
  builderPromptCode.textContent = promptTemplate;
}

// Dual-Path Copy to Clipboard with live status messages
function copyTextToClipboard(text, btnElement) {
  function showFeedback(success) {
    showToast(success ? "Copied" : "Copy failed");
    toggleButtonState(btnElement, success);
  }

  // Path A: Standard Async Clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showFeedback(true);
    }).catch((err) => {
      console.warn('Async clipboard API failed, attempting fallback copy.', err);
      fallbackCopy(text);
    });
  } else {
    // Path B: Fallback Textarea execCommand
    fallbackCopy(text);
  }

  function fallbackCopy(textToCopy) {
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      showFeedback(successful);
    } catch (err) {
      console.error('Fallback execCommand copy failed:', err);
      showFeedback(false);
    }
    document.body.removeChild(textArea);
  }
}

function showToast(message) {
  toastMsg.textContent = message;
  toastMsg.classList.add('active');
  setTimeout(() => {
    toastMsg.classList.remove('active');
  }, 1500);
}

function toggleButtonState(btn, success) {
  if (!btn) return;
  const originalLabel = btn.textContent;
  btn.textContent = success ? "Copied!" : "Failed";
  btn.style.backgroundColor = success ? "var(--accent-wine)" : "#a3223f";
  btn.style.color = "#fff";
  setTimeout(() => {
    btn.textContent = originalLabel;
    btn.style.backgroundColor = "";
    btn.style.color = "";
  }, 1500);
}

// Handle URL Hash States
function handleHashChange() {
  const hash = window.location.hash;
  if (!hash) return;

  if (hash === '#skills') {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  } else if (hash === '#workflows') {
    document.getElementById('workflows').scrollIntoView({ behavior: 'smooth' });
  } else if (hash.startsWith('#skill/')) {
    const skillName = hash.replace('#skill/', '');
    openSkillDetail(skillName);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderSkills();
  });

  // Category Buttons
  categoriesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cat-btn')) {
      document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.getAttribute('data-category');
      renderSkills();
    }
  });

  // Reset Filters
  resetFilters.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    activeCategory = 'all';
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-category') === 'all') {
        btn.classList.add('active');
      }
    });
    renderSkills();
  });

  // Hotkey "/" to focus search
  document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    const isInput = active.tagName === 'INPUT' || active.tagName === 'SELECT' || active.tagName === 'TEXTAREA' || active.isContentEditable;
    if (e.key === '/' && !isInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Close Dialog buttons
  drawerClose.addEventListener('click', closeDrawer);

  // Dialog backdrop close handling
  drawer.addEventListener('click', (e) => {
    const rect = drawer.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      closeDrawer();
    }
  });

  // Native Dialog Close listener (handles Escape Key close)
  drawer.addEventListener('close', () => {
    document.body.style.overflow = ''; // Release scroll lock
    // Restore Hash state
    window.history.pushState(null, null, '#skills');
    // Restore focus
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  });

  // Focus trap for details dialog
  drawer.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      const focusable = Array.from(drawer.querySelectorAll('button, [href], select, textarea, [tabindex="0"]'))
        .filter(el => !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener('click', () => {
    const active = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', active);
    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close Mobile Menu on Nav Item Click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Escape closes Mobile Menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Workflow Builder Selection
  problemSelector.addEventListener('change', updateWorkflowBuilder);
  updateWorkflowBuilder(); // Initial run

  // Expandable File Tree Toggle
  document.querySelectorAll('.tree-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const controls = btn.getAttribute('aria-controls');
      const details = document.getElementById(controls);
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      btn.setAttribute('aria-expanded', !isExpanded);
      details.classList.toggle('active', !isExpanded);
    });
  });

  // Global Header Action Copy Starter Prompt
  copyStarterBtn.addEventListener('click', () => {
    const starterPrompt = `Assigning a website engineering task.\n\nPROJECT: [Name]\nTARGET: [Route/File]\nPROBLEM: [Details]\nAcceptance criteria:\n- Must inspect dependencies before edits.\n- Must write responsive layout modifications for 390px.\n- Must provide screenshots of start, middle, and end states.\n- Must verify final build compiles and is deployed.`;
    copyTextToClipboard(starterPrompt, copyStarterBtn);
  });

  // Copy Use Template
  copyUseTemplateBtn.addEventListener('click', () => {
    const codeText = document.getElementById('use-template-code').textContent;
    copyTextToClipboard(codeText, copyUseTemplateBtn);
  });

  // Copy Workflow Builder Prompt
  copyWorkflowBtn.addEventListener('click', () => {
    const codeText = document.getElementById('builder-prompt-code').textContent;
    copyTextToClipboard(codeText, copyWorkflowBtn);
  });

  // Global Hash Listener
  window.addEventListener('hashchange', handleHashChange);
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', init);
