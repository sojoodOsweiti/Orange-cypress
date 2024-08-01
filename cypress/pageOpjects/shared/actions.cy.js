class sharedActions{
    loginToHRM(){
        cy.loginHRM()
        return this
    }
}
export default sharedActions