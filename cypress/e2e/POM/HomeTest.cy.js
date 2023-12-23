import { Home } from "../../pages/Home";


describe('Home_Test', function(){

    const home=new Home()

    it("testHome", function(){

        home.visit();

    })
    it("testcontact_Us", function(){
        home.visit();

        home.contact_Us().click()
    })
    it("testBus", function(){
        home.visit();

        home.Bus().click()

    })
    it("testLaunch", function(){
        home.visit();

        home.Launch().click();

    })
    it("testTrain", function(){
        home.visit();

        home.Train().click()

    })

})