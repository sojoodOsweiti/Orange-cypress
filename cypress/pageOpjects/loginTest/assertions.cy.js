class loginAssertions{
    dashboeardShown(){
        cy.get(".oxd-sidepanel-header").should('be.visible');
        return this;
    }
}
export default loginAssertions