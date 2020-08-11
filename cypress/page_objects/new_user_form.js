class new_user_form{
    get firstNameField(){
        return cy.get('[name = "first_name"]')
    }
    get lastNameField(){
        return cy.get('[name = "last_name"]')
    }
    get emailField(){
        return cy.get('[name = "email"]')
    }
    get passwordField(){
        return cy.get('[name = "password"]')
    }
    get confirmPasswordField(){
        return cy.get('[name = "confirm_password"]')
    }
    get existingUserButton(){
        return cy.contains('Already a user')
    }
    typeFirstName(myFirstName){
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
