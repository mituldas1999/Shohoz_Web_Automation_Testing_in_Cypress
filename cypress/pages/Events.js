export class Events{

    visit(){
        cy.visit('https://www.shohoz.com/')
        cy.title().should('be.equal',"Bangladesh's Largest Online Ticket Destination | Shohoz")
    }
    clickEvents(){
        return cy.get('ol > :nth-child(4) > a')
    }
}