class addUserActions{
    clickAdminPage(){
        cy.get(".oxd-main-menu-item-wrapper").eq(0).click()
        return this;
    }

    clickAdd(){
        cy.get(".oxd-button--secondary").last().click()
    }

    selectRole(){
        cy.get(".oxd-select-wrapper").first().click()
        cy.get(".oxd-select-option").contains("Admin").click()
    }

    selectStatus(){
        cy.get(".oxd-select-wrapper").last().click()
        cy.get(".oxd-select-option").contains("Enabled").click()
    }

    selectEmployee(){
        cy.get(".oxd-autocomplete-text-input--active").type("a")
        cy.get(".oxd-autocomplete-option").eq(2).click()
    }

    enterUserName(){
        const randomNumber = Math.floor(Math.random() * 100);
        const randomString = `dummy${randomNumber}`;
        cy.get(".oxd-input--active").eq(1).type(randomString)
    }

    enterPassword(){
        cy.get(".oxd-input--active").eq(1).type("dummy@123")
    }
    confirmPassword(){
        cy.get(".oxd-input--active").eq(2).type("dummy@123")
    }

    clcikSave(){
        cy.get(".orangehrm-left-space").click()
    }

}
export default addUserActions