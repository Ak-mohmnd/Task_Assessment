const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: 
  {
      projectId: "a1mpdm",  
      viewportWidth: 1440,
      viewportHeight: 946,
    
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
