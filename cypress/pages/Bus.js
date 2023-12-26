export class Bus{

    visit(){
        cy.visit('https://www.shohoz.com/')
        cy.title().should('be.equal',"Bangladesh's Largest Online Ticket Destination | Shohoz")
    }
    Click_Bus(){
        return cy.get('ol > :nth-child(1) > a')
    }
}