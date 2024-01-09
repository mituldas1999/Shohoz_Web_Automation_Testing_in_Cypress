import { Events } from "../../pages/events";

describe('Events_Test', () =>{
    const events= new Events
    it("inputForm", () =>{
        events.visit()
        events.clickEvents().click()
    })
})