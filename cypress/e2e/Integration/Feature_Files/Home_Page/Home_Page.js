import Login_Page from "../../../Page_Objects/Page_Actions/Login_Page"
import {When,Then,Given,And} from "cypress-cucumber-preprocessor/steps"
import Home_Page from "../../../Page_Objects/Page_Actions/Home_Page"



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

And("Verify the selected status",()=>{
    Home_Page.selectedDropdownValueVerification();
})