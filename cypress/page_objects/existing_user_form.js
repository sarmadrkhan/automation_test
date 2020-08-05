class existing_user_form{
    get newUserButton(){
        return cy.get('form > .MuiBox-root > .MuiTypography-root')
    }
    get emailField(){
        return cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get passwordField(){
        return cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get signInButton(){
        return cy.get('.MuiButton-label')
    }
    clickNewUserButton(){
        this.newUserButton.click()
    }
    typeEmail(myEmail){
        this.emailField.type(myEmail)
    }
    typePassword(myPassword){
        this.passwordField.type(myPassword)
    }
    clickSignInButton(){
        this.signInButton.click()
    }
} module.exports=new existing_user_form()
