export class Launch{

    visit(){
        cy.visit('https://www.shohoz.com/')
        cy.title().should('be.equal',"Bangladesh's Largest Online Ticket Destination | Shohoz")
    }
    Click_Launch(){
        return cy.get('ol > :nth-child(2) > a')
    }
}