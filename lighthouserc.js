module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- --port=4173",
      startServerReadyPattern: "Ready",
      url: ["http://localhost:4173"],
      numberOfRuns: 3,
      settings: {
        emulatedFormFactor: "mobile",
        throttlingMethod: "simulate",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 1 }],
        "categories:best-practices": ["error", { minScore: 1 }],
        "categories:seo": ["error", { minScore: 1 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.03 }],
        "interactive": ["warn", { maxNumericValue: 3500 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
