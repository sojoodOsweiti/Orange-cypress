class loginActions{
    visitWebsite(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/auth/login");
        return this; 
    }
    
    enterEmail(){
        cy.get('[name="username"]').type("Admin");
        return this;
    }

    enterPassword(){
        cy.get('[name="password"]').type("admin123");
        return this;
    }

    clickLogin(){
        cy.get(".orangehrm-login-button").click();
        return this;
    }
    
}
export default loginActions