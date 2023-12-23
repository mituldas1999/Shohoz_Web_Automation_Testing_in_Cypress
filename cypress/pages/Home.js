export class Home{
    visit(){
        cy.visit('https://www.shohoz.com/')
        cy.title().should('be.equal',"Bangladesh's Largest Online Ticket Destination | Shohoz")
    }
    contact_Us(){
        return cy.get(':nth-child(1) > .fnt-normal')
    }
    Bus(){
        return cy.get('ol > :nth-child(1) > a')
    }
    Launch(){
        return cy.get('body > header > div.main-header > div > nav > ul > li > ol > li:nth-child(2) > a')
    }
    Train(){
        return cy.get('body > header > div.main-header > div > nav > ul > li > ol > li:nth-child(3) > a')
    }
}