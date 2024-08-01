import { Given, When, Then  } from "cypress-cucumber-preprocessor/steps";
import addCandidateActions from "../../../pageOpjects/addCandidate/actions.cy";
import addCandidateAsserstions from "../../../pageOpjects/addCandidate/assertions.cy";
import sharedActions from "../../../pageOpjects/shared/actions.cy";


const addCandidateAction = new addCandidateActions()
const addCandidateAssertion = new addCandidateAsserstions()
const sharedAction = new sharedActions()
before(() =>{
    sharedAction.loginToHRM()
})

Given('Click on recruitment page',()=>{
    addCandidateAction.navigateRecruitment()
})
When('Click on add button',()=>{
    addCandidateAction.clickAdd()
})
When('Enter first name',()=>{
    addCandidateAction.enterFirstName()
})
When('Enter last name',()=>{
    addCandidateAction.enterLastName()
})
When('Enter Email',()=>{
    addCandidateAction.enterEmail()
})
When('Click on save button',()=>{
    addCandidateAction.clickSave()
})
Then('The candidate is added',()=>{
    addCandidateAssertion.succeessMessage()
})



// it('add Candidate ', () => {
//     addCandidateAction.navigateRecruitment()
//     cy.wait(3000)
//     addCandidateAction.clickAdd()
//     cy.wait(6000)
//     addCandidateAction.enterFirstName()
//     cy.wait(3000)
//     addCandidateAction.enterLastName()
//     cy.wait(3000)
//     addCandidateAction.enterEmail()
//     cy.wait(3000)
//     addCandidateAction.clickSave()
//     cy.wait(1000)
//     addCandidateAssertion.succeessMessage()
// });
