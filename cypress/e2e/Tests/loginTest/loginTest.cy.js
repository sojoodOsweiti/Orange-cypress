import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import loginActions from "../../../pageOpjects/loginTest/action.cy";
import loginAssertions from "../../../pageOpjects/loginTest/assertions.cy";
const loginAction = new loginActions()
const loginAssertion = new loginAssertions()

Given('Navigate to the orange HRM website',()=>{
    loginAction.visitWebsite()
})
When('Enter username',()=>{
    loginAction.enterEmail()
})
When('Enter Password',()=>{
   loginAction.enterPassword()
})
When('Click on login button',()=>{
   loginAction.clickLogin()
})
Then('The user will redirected to the home page',()=>{
    loginAssertion.dashboeardShown()
})