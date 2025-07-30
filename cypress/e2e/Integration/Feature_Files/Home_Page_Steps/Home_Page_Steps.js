import Login_Page from "../../../Page_Objects/Page_Actions/Login_Page"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import Home_Page from "../../../Page_Objects/Page_Actions/Home_Page"



When("I login with valid mobile number {string}",(mobileNumber)=>{
    cy.loginWithOtp(mobileNumber)

})


Then("Verify the ticket text in the dashboard",()=>{

    Home_Page.ticketDashboardVerification()
})


When("Click on search box and type the text in the search box {string}",(searchData)=>{
    Home_Page.searchItems(searchData)
})

When("Click on more filter button",()=>{

    Home_Page.moreFilterAction()
})
Then("Verify the more filter page",()=>{
    
    Home_Page.moreFilterVerification()
})


When("Click on the dropdown",()=>{
    Home_Page.dropdownStatus();
})

Then("Select the multiple value from the dropdown",()=>{

    Home_Page.selectValueFromDropdown();

})

Then("Verify the selected status",()=>{
    Home_Page.selectedDropdownValueVerification();
})

When("Click on add new ticket button",()=>{
    Home_Page.addNewTicket();
})

Then("Verify the ticket creation page",()=>{
    Home_Page.verifyAddNewTicket();
})