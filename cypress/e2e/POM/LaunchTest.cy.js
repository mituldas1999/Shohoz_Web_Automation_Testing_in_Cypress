import { Launch } from "../../pages/Launch"

describe('Launch_Test', () =>{

    const launch=new Launch
    it("Launch", () =>{
        launch.visit()
        // cy.wait(10000)
        // launch.clickLaunch().click()
        cy.get("ol > :nth-child(2) > a").click()
        cy.get("#dest_from").type("Hello")
    })
})