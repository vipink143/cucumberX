
import Login_Page from "../../../Page_Objects/Page_Actions/Login_Page";

/// <reference types= "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("Visit the website", () => {
    console.log("dryRun is:", Cypress.env('dryRun'));
  
    if (!Cypress.env('dryRun')) {
      cy.log("Dry run: Skipping navigation to login page.");
      return;
    }
  
    cy.visit(Cypress.env("stanza_prod_url"));
  });
// Given("Visit the website",()=>{
//     cy.visit(Cypress.env("stanza_prod_url"))
// })

When("Provide mobile number in the text field {string}",(mobileNumber)=>{

    Login_Page.enterMobileNumber(mobileNumber)
    
})

Then("Click on send otp button for login",()=>{

    Login_Page.submitMobileNumber()

})

When("Enter the otp",()=>{

    Login_Page.enterOtp()

})

Then("Click on submit button",()=>{
    Login_Page.submitOtp()

})