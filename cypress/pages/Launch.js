export class Launch{

    visit(){
        cy.visit('https://www.shohoz.com/')
        cy.title().should('be.equal',"Bangladesh's Largest Online Ticket Destination | Shohoz")
    }
    clickLaunch(){
        return cy.get('ol > :nth-child(2) > a')
    }
    inputData(){
        cy.get("#dest_from").type("Dhaka")
        cy.get('#ui-id-3').click()
        cy.get('#dest_to').type('Barisal')
        cy.get('#ui-id-4').click()
        // cy.get('#ui-datepicker-div > div > a.ui-datepicker-next.ui-corner-all > span').click()
        cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(1) > td:nth-child(6) > a').click()
        cy.get('#launchsearch > ul > div:nth-child(6) > div > button').click({force: true})
        cy.get('#16257').click();

    }
}