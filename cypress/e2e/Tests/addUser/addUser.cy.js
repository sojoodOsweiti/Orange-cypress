import { Given, When, Then  } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../pageOpjects/shared/actions.cy";
import addUserActions from "../../../pageOpjects/addUser/actions.cy";
import addUserAssertions from "../../../pageOpjects/addUser/assertions.cy";

const saherd = new sharedActions()
const addUser = new addUserActions()
const addUserAssertion = new addUserAssertions()

// before(() =>{
//     saherd.loginToHRM()
// })


Given('Click on admin page',()=>{
    addUser.clickAdminPage()
})

When('Click on add button',()=>{
    addUser.clickAdd()
})

When('Select a role',()=>{
    addUser.selectRole()
})

When('Select a status',()=>{
    addUser.selectStatus()
})

When('Select a role employee',()=>{
    addUser.selectEmployee()
})

When('Enter user name',()=>{
    addUser.enterUserName()
})

When('Enter Password',()=>{
    addUser.enterPassword()
})

When('Confirm password',()=>{
    addUser.confirmPassword()
})

When('Click on save button',()=>{
    addUser.clcikSave()
     cy.wait(3000)
})

Then('The user is added',()=>{
    addUserAssertion.succeessMessage()
})



// it('add user',()=>{
//     addUser.clickAdminPage()
//      addUser.clickAdd()
//      addUser.selectRole()
//      addUser.selectStatus()
//      addUser.selectEmployee()
//      addUser.enterUserName()
//      addUser.enterPassword()
//      addUser.confirmPassword()
//      addUser.clcikSave()
//      cy.wait(3000)
//      addUserAssertion.succeessMessage()
//  })