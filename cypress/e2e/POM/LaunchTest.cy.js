import { Launch } from "../../pages/Launch"

describe('Launch_Test', () =>{

    const launch=new Launch
    it("Launch", () =>{
        launch.visit()
        launch.Click_Launch().click()
    })
})