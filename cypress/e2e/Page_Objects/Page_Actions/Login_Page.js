let  login_element_locator= require("../Page_Elements/Login_Page_Elements.json")
class Login_Page
{
    get mobileInput() { return cy.get(login_element_locator.login_locator.mobile_input_locator)}
    get submitMobile() { return cy.get(login_element_locator.login_locator.submit_mobile_locator)}
    get enterOtpLogin() { return cy.get(login_element_locator.login_locator.otp_placeholder_locator)}
    get submitOtpLogin() { return cy.get(login_element_locator.login_locator.submit_otp_locator)}
    get invalidNumberMsg() {return cy.get(login_element_locator.login_locator.invalidUser_msg_locator)}
    
    
    enterMobileNumber(mobileNumber)
    {
        this.mobileInput
        .should('not.be.disabled')
        .type(mobileNumber)
    }
    submitMobileNumber()
    {
        this.submitMobile
        .should('be.visible')
        .click()
    }
    enterOtp()
    {
       let otp=['4','5','6','7']
        this.enterOtpLogin
        .should('not.be.disabled')
        .each(($el,index)=>{
            cy.wrap($el).type(otp[index])
            .should('be.visible')
        })
    }
    submitOtp()
    {
        this.submitOtpLogin
        .should('be.visible')
        .click()
    }
   
    invalidUserVerification()
    {
        let expectedText='No user exists with this number';
        this.invalidNumberMsg.then((errorText)=>{
            let actualText = errorText.text();
            expect(actualText.trim()).to.eq(expectedText)
        })
    }
    

} export default new Login_Page