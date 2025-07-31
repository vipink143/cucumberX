// pipeline {
   
//    //The agent section specifies where the entire Pipeline, or a specific stage, 
//    //will execute in the Jenkins environment depending on where the agent section is placed.
//    agent any
   
//    tools {
//        //Use Node name configured in global tools configuration for Node Jenkins Plugin
//        nodejs "NodeJS 23.7.0"
//    }
   

//    //The parameters directive provides a list of parameters that a user should provide when triggering the Pipeline.
//    //The values for these user-specified parameters are made available to Pipeline steps via the params object
//    parameters {
//         string(
//             name: 'TEST_SPEC', 
//             defaultValue: 'cypress/e2e/tests/*.cy.js', 
//             description: 'Enter the name of the test spec without file extension e.g. LoginTest. Default value will run all the test specs present inside cypress/e2e/tests/ directory.'
//         )
//         string(
//             name: 'RECORD_TESTS', 
//             defaultValue: '--record false', 
//             description: 'Within CI, you can pass --record argument to record the test runs to later view on cypress dashboard. Remove the false to record the tests.'
//         )
//         choice(
//             name: 'TEST_ENVIRONMENT', 
//             choices: [
//                 'local',
//                 'dev',
//                 'qa',
//                 'stage',
//                 'prod',
//             ], 
//             description: 'Specify the test environment. Default will be local.'
//         )
//         choice(
//             name: 'BROWSER', 
//             choices: ['electron', 'chrome', 'edge', 'firefox'], 
//             description: 'Pick the web browser you want to use to run your scripts. Default will be electron.'
//         )
//         choice(
//             name: 'BROWSER_MODE', 
//             choices: ['headless', 'headed'], 
//             description: 'By default, Cypress will run tests headlessly.Passing --headed will force the browser to be shown.'
//         )
//         choice(
//             name: 'TAG', 
//             choices: [
//                 '@regression', 
//                 '@smoke', 
//                 '@Login', 
//                 '@productData', 
//                 '@Search', 
//                 '@Wishlist', 
//                 '@Cart'
//             ], 
//             description: 'Choose the test tag to filter your test scripts'
//         )
//     }

//     //The stage directive goes in the stages section and should contain a steps section, an optional agent section, 
//     //or other stage-specific directives. Practically speaking, all of the real work done by a Pipeline will be wrapped in one or more stage directives.
//    stages {
//      stage('Stage 0 - Prepare Environment') {
//             steps {
//                 script {
//                     // Start Xvfb
//                     sh 'Xvfb :99 -screen 0 1024x768x24 &'
//                     sh 'export DISPLAY=:99'
//                 }
//             }
//         }
//        stage('Stage 1 - Checkout Code') {
//         //The steps section defines a series of one or more steps to be executed in a given stage directive.
//             steps {
//                 echo 'Code is checked out'
//             }
//         }
        
//        stage('Stage 2 - Installing dependencies') {
//            steps {
//                 sh 'npm i'
//                 sh 'npx cypress install'   // ✅ ensures Cypress binary is downloaded
//                 echo 'dependencies installed'

//            }
//        }
       
//      //  This deletes any older xml results files present in the directory
//        stage('Stage 3 - Clearing old reports') {
//            steps {
//                sh "npm run report:pre"
//            }
//        }
       
//        stage('Stage 4 - Running cypress e2e Tests') {
//             //For recording tests on Cypress Cloud Dashboard, you need to set these environment variables
//             // environment {
//             //     CYPRESS_RECORD_KEY = credentials('cypress-framework-record-key')
//             //     CYPRESS_PROJECT_ID = credentials('cypress-framework-project-id')
//             // }

//             steps {
//                 //sh "SET NO_COLOR=$NO_COLOR"    //You may want to do this if ASCII characters or colors are not properly formatted in your CI.
//                 script {
//                     if (params.TEST_SPEC == "cypress/e2e/tests/*.cy.js") {
//                         echo "Running all test scripts with Browser: ${params.BROWSER}, TAG: ${params.TAG}, Environment: ${params.TEST_ENVIRONMENT}"
//                         sh "npx cypress run --${params.BROWSER_MODE} --browser ${params.BROWSER} --env environmentName=${params.TEST_ENVIRONMENT},grepTags=${params.TAG} ${params.RECORD_TESTS}"
//                     } else {
//                         echo "Running script: ${params.TEST_SPEC} with Browser: ${params.BROWSER}, TAG: ${params.TAG}, Environment: ${params.TEST_ENVIRONMENT}"
//                         sh "npx cypress run --spec cypress/e2e/tests/${params.TEST_SPEC}.cy.js --${params.BROWSER_MODE} --browser ${params.BROWSER} --env environmentName=${params.TEST_ENVIRONMENT},grepTags=${params.TAG} ${params.RECORD_TESTS}"
//                     }
//                 }
                
//             }
//         }
        
//        // Mocha JUnit Reporter produces separate XML for each spec result, so we merge the test results into one XML file 
//     //    stage('Stage 5 - Merging JUnit reports') {
//     //        steps {
//     //            sh "npm run report:post"
//     //        }
//     //    }

//    }
   
//    post {
//         always {
//             //Publish the HTML report using the HTML Publisher plugin
//             echo 'Publishing the Extent Report'
//             publishHTML([
//                     allowMissing: false,
//                     alwaysLinkToLastBuild: false,
//                     keepAll: true,
//                     reportDir: 'cypress/results/cypress-mochawesome-reporter',
//                     reportFiles: 'index.html',
//                     reportName: 'Cypress Mochawesome Report',
//                     reportTitles: 'Cypress Test Automation Framework',
//                     useWrapperFileDirectly: true
//             ])
            
//             //To avoid duplicate results, we comment this, and use it within script only
//             //junit 'cypress/results/junit/combined-report.xml'

//             // script {
//             //     // Get the JUnit test results
//             //     echo 'Publishing JUnit XML Results'
//             //     def testResults = junit testResults: 'cypress/results/junit/combined-report.xml'
//             // }
//         }
        
//         success {
//             echo 'Build Successful'
//         }

//         failure {
//             echo 'Build Failed'
//         }

//         unstable {
//             echo 'Build unstable'
//         }
//     }
// }










pipeline {
    agent any

    tools {
        nodejs "NodeJS 23.7.0"
    }

    environment {
        // ✅ Force Cypress cache inside Jenkins workspace so binary persists between builds
        CI = "true"
        CYPRESS_CACHE_FOLDER = "${WORKSPACE}/.cache/Cypress"   // ✅ force binary into workspace
        CYPRESS_INSTALL_BINARY = "true"
    }

    parameters {
        string(name: 'TEST_SPEC', defaultValue: 'cypress/e2e/tests/*.cy.js', description: 'Enter the test spec path.')
        string(name: 'RECORD_TESTS', defaultValue: '--record false', description: 'Record tests on Cypress Dashboard.')
        choice(name: 'TEST_ENVIRONMENT', choices: ['local', 'dev', 'qa', 'stage', 'prod'], description: 'Test environment.')
        choice(name: 'BROWSER', choices: ['electron', 'chrome', 'edge', 'firefox'], description: 'Choose browser.')
        choice(name: 'BROWSER_MODE', choices: ['headless', 'headed'], description: 'Browser mode.')
        choice(name: 'TAG', choices: ['@regression', '@smoke', '@Login', '@productData', '@Search', '@Wishlist', '@Cart'], description: 'Test tag.')
    }

    stages {
        stage('Stage 0 - Prepare Environment') {
            steps {
                sh 'Xvfb :99 -screen 0 1024x768x24 &'
                sh 'export DISPLAY=:99'
            }
        }

        stage('Stage 1 - Checkout Code') {
            steps {
                echo '✅ Code is checked out'
            }
        }

        stage('Stage 2 - Install Dependencies & Cypress') {
            steps {
                sh '''
                    echo ">>> Installing dependencies"
                    npm ci

                    echo ">>> Forcing Cypress binary install inside workspace cache"
                    export CYPRESS_CACHE_FOLDER=$WORKSPACE/.cache/Cypress
                    echo "CYPRESS_CACHE_FOLDER is set to: $CYPRESS_CACHE_FOLDER"

                    # Show current Cypress cache path
                    npx cypress cache path || true

                    # Clear old cache & force re-install
                    DEBUG=cypress:* npx cypress install --force

                    echo ">>> Verifying Cypress binary"
                    DEBUG=cypress:* npx cypress verify
                '''
            }
        }

        stage('Stage 3 - Clear Old Reports') {
            steps {
                script {
                    if (fileExists('package.json') && sh(script: "npm run | grep report:pre", returnStatus: true) == 0) {
                        sh "npm run report:pre"
                    } else {
                        sh "rm -rf cypress/results || true"
                        echo "⚠️ No report:pre script found, manually cleared reports"
                    }
                }
            }
        }

        stage('Stage 4 - Run Cypress Tests') {
            steps {
                sh '''
                    echo ">>> Installing Cypress binary"
                    npx cypress install --force
                    npx cypress verify

                    echo ">>> Running Tests"
                    npx cypress run --headless --browser electron --env environmentName=local,grepTags=@regression --record false
                '''
            }
        }

    //     stage('Stage 5 - Merge Reports') {
    //         steps {
    //             script {
    //                 if (fileExists('package.json') && sh(script: "npm run | grep report:post", returnStatus: true) == 0) {
    //                     sh "npm run report:post"
    //                 } else {
    //                     echo "⚠️ No report:post script found, skipping merge"
    //                 }
    //             }
    //         }
    //     }
    // }

    post {
        always {
            echo '📊 Publishing Mochawesome Report'
            script {
                def reportPath = 'cypress/results/cypress-mochawesome-reporter'
                if (fileExists(reportPath)) {
                    publishHTML([
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: reportPath,
                        reportFiles: 'index.html',
                        reportName: 'Cypress Mochawesome Report',
                        reportTitles: 'Cypress Test Automation Framework',
                        useWrapperFileDirectly: true
                    ])
                } else {
                    echo "⚠️ Report directory not found: ${reportPath}"
                }
            }
        }
        success { echo '✅ Build Successful' }
        failure { echo '❌ Build Failed' }
        unstable { echo '⚠️ Build Unstable' }
    }
}
