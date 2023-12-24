import { Home } from "../../pages/Home";


describe('Home_Test', () =>{

    const home=new Home()

    it("Home", () =>{
        home.visit()

    })
    it("contact_Us", () =>{
        home.visit()
        home.contact_Us().click()
    })
    it("Bus", () =>{
        home.visit()
        home.Bus().click()

    })
    it("Launch", () =>{
        home.visit()
        home.Launch().click()

    })
    it("Train", () =>{
        home.visit()
        home.Train().click()

    })

})