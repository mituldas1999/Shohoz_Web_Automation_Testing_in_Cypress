import { Launch } from "../../pages/Launch"

describe('Launch_Test', () =>{

    const launch=new Launch
    it("inputForm", () =>{
        launch.visit()
        launch.clickLaunch().click()
        launch.inputData()
    })
})