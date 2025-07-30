/// <reference types="cypress" />


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




import Login_Page from "../Page_Objects/Page_Actions/Login_Page";

// Login with valid mobile number and OTP
Cypress.Commands.add("loginWithOtp", (mobileNumber) => {
  cy.visit(Cypress.env("stanza_prod_url"));
  Login_Page.enterMobileNumber(mobileNumber);
  Login_Page.submitMobileNumber();
  Login_Page.enterOtp();
  Login_Page.submitOtp();
});

// Login with invalid mobile number
Cypress.Commands.add('loginWithInvalidMobile', (mobileNumber) => {
  cy.visit(Cypress.env("stanza_prod_url"));
  Login_Page.enterMobileNumber(mobileNumber);
  Login_Page.submitMobileNumber();
  Login_Page.invalidUserVerification();
});





let home_element_locator = require("../Page_Elements/Home_Page_Elements.json")
// For dropdown

Cypress.Commands.add('selectStatus', (statusList) => {
    cy.get(home_element_locator.home_locator.dropdown_locator).click();
    statusList.forEach((status) => {
      cy.get('home_element_locator.home_locator.dropdown_value_locator').contains(status).click();
    });
  });
  
  // use in test

  cy.selectStatus(['Open', 'Resolved']);
