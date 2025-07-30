
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    async setupNodeEvents(on, config) {
      // Cucumber preprocessor setup
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results/cypress-mochawesome-reporter",
    overwrite: false,
    html: true,
    json: true,
  },

  env: {
    dryRun: true,
    stanza_prod_url: "https://nucleus.stanzaliving.com/login",
  },
});






































// const { defineConfig } = require('cypress');
// //const cucumber = require('cypress-cucumber-preprocessor').default;
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;


// // module.exports = defineConfig({

// //   reporter: 'mochawesome',

// //   e2e: {
// //     watchForFileChanges: false,
// //     pageLoadTimeout: 60000,
// //     supportFile: "cypress/support/e2e.js",  // ✅ ensure this path is correct
// //     specPattern: '**/*.feature',
// //    // supportFile: true,
// //     setupNodeEvents(on, config) {
// //       on('file:preprocessor', cucumber());
// //       require('cypress-mochawesome-reporter/plugin')(on);
// //       return config;

// //     },


// //   },
//   module.exports = defineConfig({
//     e2e: {
//       pageLoadTimeout: 60000,
//       specPattern: '**/*.feature',
//       supportFile: "cypress/support/e2e.js",
//       async setupNodeEvents(on, config) {
//         const bundler = createBundler({
//           plugins: [createEsbuildPlugin(config)],
//         });
  
//         on("file:preprocessor", bundler);
//         await addCucumberPreprocessorPlugin(on, config);
//         require("cypress-mochawesome-reporter/plugin")(on);
  
//         return config;
//       },
//     },
  

//   // reporter: 'cypress-mochawesome-reporter',
//   // reporterOptions: {
//   //   reportDir: 'cypress/results/cypress-mochawesome-reporter',
//   //   overwrite: false,
//   //   html: true,
//   //   json: true,
//   // },

//   env:
//   {
//     dryRun: true,
//     "stanza_prod_url": "https://nucleus.stanzaliving.com/login"
//   }

// });