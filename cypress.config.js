// cypress.config.js
const { defineConfig } = require('cypress');
const fs = require('fs');

function getEnvConfig(configFile) {
  const path = `./cypress.env.${configFile}.json`;
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path));
  } else {
    console.warn(`⚠️ Env file ${path} not found.`);
    return {};
  }
}

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    reporter: 'mochawesome',
    reporterOptions: {
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
