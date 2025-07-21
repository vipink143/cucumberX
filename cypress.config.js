const { defineConfig } = require('cypress');
 const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    watchForFileChanges:false ,
    pageLoadTimeout:60000,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: '**/*.feature',

    supportFile:false
  },

  env:
  {
    "hrm_url": "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    "stanza_prod_url":"https://nucleus.stanzaliving.com/login"
  }
  
});