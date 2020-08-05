class new_user_form{
    get firstNameField(){
        return cy.get('.jss418 > .MuiInputBase-root > .MuiInputBase-input')
    }
    get lastNameField(){
        return cy.get('.jss422 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get emailField(){
        return cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get passwordField(){
        return cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get confirmPasswordField(){
        return cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get existingUserButton(){
        return cy.get('.jss423 > .MuiTypography-root')
    }
    typerFirstName(myFirstName){
        this.firstNameField.type(myFirstName)
    }
    typeLastName(myLastName){
        this.lastNameField.type(myLastName)
    }
    typeEmail(myEmail){
        this.emailField.type(myEmail)
    }
    typePassword(myPassword){
        this.passwordField.type(myPassword)
    }
    typeConfirmPassword(myConfirmPassword){
        this.confirmPasswordField.type(myConfirmPassword)
    }
    clickExistingUserButton(){
        this.existingUserButton.click()
    }
} module.exports=new new_user_form()
