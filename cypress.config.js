const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ekh4co',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
