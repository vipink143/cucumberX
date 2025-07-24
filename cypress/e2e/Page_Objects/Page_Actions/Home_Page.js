let home_element_locator = require("../Page_Elements/Home_Page_Elements.json")

class Home_Page {
    get ticketDashboardVerificationInput() { return cy.get(home_element_locator.home_locator.ticket_dashboard_verify_locator) }
    get searchInput() { return cy.get(home_element_locator.home_locator.search_locator) }
    get homeDropdownInput() { return cy.get(home_element_locator.home_locator.home_dropdown_locator) }
    get moreFilterActionInput() { return cy.get(home_element_locator.home_locator.more_filter_locator) }
    get moreFilterVerificationInput() { return cy.get(home_element_locator.home_locator.more_filter_verification_locator) }
    get dropdownInput() { return cy.get(home_element_locator.home_locator.dropdown_locator)}
    get dropdownValueInput() { return cy.get(home_element_locator.home_locator.dropdown_value_locator)}
    get selectedDropdownValueInput() { return cy.get(home_element_locator.home_locator.selected_dropdown_value_locator)}

    

    ticketDashboardVerification() {
        let expectedText = "Tickets";
        this.ticketDashboardVerificationInput.should('contain.text', 'Tickets')
        this.ticketDashboardVerificationInput.then(($el) => {
            let actualText = $el.text();
            expect(actualText).to.equal(expectedText)

        })

        // cy.contains("Tickets").should('contain.text','Tickets')
    }

    searchItems(searchData) {
        this.searchInput.click()
            .type(searchData)
            .should('have.value', 'AL-1171986')
    }

    homeStatusDropdownAction() {
        this.homeDropdownInput.eq(0).contains("Status")
            .click()
    }
    moreFilterAction() {
        this.moreFilterActionInput.click({ force: true })
    }
    moreFilterVerification() {
        this.moreFilterVerificationInput.contains("Filters").should('have.text', 'Filters')
    }

    dropdownStatus() {
        this.dropdownInput.eq(0).click({ force: true })

      // cy.selectStatus(['Open', 'Resolved']); // by custom commands
        
    }

    selectValueFromDropdown()
    {
        //  cy.get('.select__menu-list')
        // cy.get('.select__value-container')


         // Select multiple options from dropdown
         const statuses = ['In Progress', 'COMPLETED', 'Resolved'];

         statuses.forEach((status) => {
             this.dropdownValueInput
                 .contains(status)
                 .click(); // Select each one
         });
         // Select single options from dropdown    
         // cy.get(".sc-jeCdPy > .sc-fOKMvo > .sc-eLExRp > div > .field-label").eq(0).click({ force: true }) // Open the dropdown
 
         // cy.get('.select__menu-list')
         //     .contains('In Progress')
         //     .click(); // Check or select 'In Progress'
 
        
    }
    selectedDropdownValueVerification()
    {
            this.selectedDropdownValueInput
             .should('contain.text', 'In Progress')
             .and('contain.text', 'COMPLETED')
             .and('contain.text', 'Resolved');
 
    }
    // Select single options from dropdown    
     //     cy.get('.sc-jeCdPy > .sc-fOKMvo > .sc-eLExRp > div > .field-label')
         //     .should('contain.text', 'In Progress')


} export default new Home_Page

//cy.get(':nth-child(2) > .sc-bwCtUz > .sc-epnACN > .filter-list > .sc-iQNlJl')

// div.sc-iQNlJl.cOishN