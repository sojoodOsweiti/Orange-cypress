class addCandidateAsserstions{
    succeessMessage(){
        cy.get(".oxd-toast--success").should('be.visible')
        return this;
    }

}
export default addCandidateAsserstions