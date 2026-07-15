import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1, // run sequentially to avoid server port clashes
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'root-hosting',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://127.0.0.1:4173/',
      },
    },
    {
      name: 'github-pages-subpath',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://127.0.0.1:4173/website-agent-skills-repo/',
      },
    },
  ],
  webServer: {
    command: 'node scripts/serve.js',
    url: 'http://127.0.0.1:4173/',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: 10000,
  },
});
