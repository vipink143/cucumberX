let add_New_Ticket_locator= require("../Page_Elements/Add_New_Ticket_Elements.json")



class add_New_Ticket
{

    get yyy() { return cy.get(add_New_Ticket_locator.add_new_ticket_element_locator.xxxx)  }



    zzzz()
    {
        this.yyy.click()
    }





} export default new add_New_Ticket