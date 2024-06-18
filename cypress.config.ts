import { defineConfig } from "cypress";

export default defineConfig({
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  e2e: {
    setupNodeEvents() {},
    baseUrl: "http://localhost:5173",
  },
});
