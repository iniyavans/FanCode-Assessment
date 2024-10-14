// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Configures Playwright test runner.
 *
 * @example
 * // Example usage:
 * module.exports = defineConfig({
 *   // ... config options ...
 * });
 *
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  /**
   * Timeout for each test in milliseconds.
   *
   * @example
   * timeout: 30000, // 30 seconds
   */
  timeout: 60000,

  /**
   * Directory where test files are located.
   *
   * @example
   * testDir: './tests',
   */
  testDir: './test',

  /**
   * Run tests in files in parallel.
   *
   * @example
   * fullyParallel: false, // Run tests sequentially
   */
  fullyParallel: true,

  /**
   * Number of retries on CI.
   *
   * @example
   * retries: 3, // Retry 3 times on CI
   */
  retries:  2,

  /**
   * Number of workers to use for parallel testing.
   *
   * @example
   * workers: 2, // Use 2 workers for parallel testing
   */
  workers: 1,

  /**
   * Reporter to use for test results.
   *
   * @example
   * reporter: [['list'], ['json', { outputFile: 'results.json' }]],
   */
  reporter: [['dot'], ['json', { outputFile: 'test-results.json' }]],

  /**
   * Shared settings for all projects.
   *
   * @example
   * use: {
   *   // Collect trace when retrying the failed test.
   *   trace: 'on-first-retry',
   *   // Run tests in headless mode.
   *   headless: true,
   * },
   */
  use: {
    /**
     * Collect trace when retrying the failed test.
     *
     * @example
     * trace: 'on-first-retry',
     */
    trace: 'on-first-retry',
    /**
     * Run tests in headless mode.
     *
     * @example
     * headless: false, // Run tests in headed mode
     */
    headless: true,
  },

  /**
   * Configure projects for major browsers.
   *
   * @example
   * projects: [
   *   {
   *     name: 'firefox',
   *     use: { ...devices['Desktop Firefox'] },
   *   },
   * ],
   */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});