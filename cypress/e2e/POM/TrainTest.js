import { Train } from "../../pages/train"
describe('Train_Test', () =>{

    const train=new Train
    it("Train", () =>{
        train.visit()
        train.Click_Train().click()
    })
})