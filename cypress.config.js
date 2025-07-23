const { defineConfig } = require('cypress');
 const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({

  reporter: 'mochawesome',

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

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results/cypress-mochawesome-reporter',
    overwrite: false,
    html: true,
    json: true,
  },

  env:
  {
    dryRun: true,
    "stanza_prod_url":"https://nucleus.stanzaliving.com/login"
  }
  
});