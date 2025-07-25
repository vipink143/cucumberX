import Login_Page from "../../../Page_Objects/Page_Actions/Login_Page";
import Home_Page from "../../../Page_Objects/Page_Actions/Home_Page";
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import Add_New_Ticket from "../../../Page_Objects/Page_Actions/Add_New_Ticket";


Given("Visit the website",()=>{

    cy.visit(Cypress.env('stanza_prod_url'))
})

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

When("Click on add new ticket button",()=>{
    Home_Page.addNewTicket();
})

Then("Verify the ticket creation page",()=>{
    Home_Page.verifyAddNewTicket();
})


When("Click on the city dropdown",()=>{

    Add_New_Ticket.zzzz()
})