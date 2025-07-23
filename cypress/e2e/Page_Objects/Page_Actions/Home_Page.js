let home_element_locator= require("../Page_Elements/Home_Page_Elements.json")

class Home_Page
{
    get ticketDashboardVerificationInput() { return cy.get(home_element_locator.home_locator.ticket_dashboard_verify_locator)}
    get searchInput() { return cy.get(home_element_locator.home_locator.search_locator)}
    get homeDropdownInput() { return cy.get(home_element_locator.home_locator.home_dropdown_locator)}
    get moreFilterActionInput() { return cy.get(home_element_locator.home_locator.more_filter_locator) }
    get moreFilterVerificationInput() { return cy.get(home_element_locator.home_locator.more_filter_verification_locator)}

    //cy.get('.select__value-container')

    ticketDashboardVerification()
    {
       let expectedText="Tickets";
       this.ticketDashboardVerificationInput.should('contain.text','Tickets')
        this.ticketDashboardVerificationInput.then(($el)=>{
            let actualText=$el.text();
            expect(actualText).to.equal(expectedText)

        })

       // cy.contains("Tickets").should('contain.text','Tickets')
    }

    searchItems(searchData)
    {
        this.searchInput.click()
        .type(searchData)
        .should('have.value','AL-1171986')
    }

    homeStatusDropdownAction()
    {
        this.homeDropdownInput.eq(0).contains("Status")
        .click()
    }
    moreFilterAction()
    {
        this.moreFilterActionInput.click({force: true})
    }
    moreFilterVerification()
    {
        this.moreFilterVerificationInput.contains("Filters").should('have.text','Filters')
    }



} export default new Home_Page