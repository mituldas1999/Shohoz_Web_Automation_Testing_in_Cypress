import { Bus } from "../../pages/Bus";
describe('Bus_Test', () =>{

    const bus=new Bus
    it("Bus", () =>{
        bus.visit()
        bus.Click_Bus().click()
    })
})