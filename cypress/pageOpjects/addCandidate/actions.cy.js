class addCandidateActions{
    navigateRecruitment(){
        cy.get(".oxd-main-menu-item-wrapper").eq(4).click()
        return this;
    }

    clickAdd(){
        cy.get(".oxd-button--secondary").last() .click()
        return this;
    }

    enterFirstName(){
        cy.get(".orangehrm-firstname").type("dummy")
        return this;
    }

    enterLastName(){
        cy.get(".orangehrm-lastname").type("user")
        return this;
    }

    enterEmail(){
        cy.get(".oxd-input.oxd-input--active ").eq(3).type("dummy@example.com")
        return this;
    }

    clickSave(){
        cy.get(".orangehrm-left-space").click()
        return this;
    }
}
export default addCandidateActions