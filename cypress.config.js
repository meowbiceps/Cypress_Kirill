import { defineConfig } from "cypress";
import * as fs from 'fs';

function getEnvConfig(configFile) {
  const path = `./cypress.env.${configFile}.json`;
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path));
  } else {
    console.warn(`⚠️ Env file ${path} not found.`);
    return {};
  }
}

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    reporter: 'mochawesome',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const configFile = config.env.configFile || 'test'; // default = test
      const envConfig = getEnvConfig(configFile);
      config.env = { ...config.env, ...envConfig };
      return config;
    },
  },
});
