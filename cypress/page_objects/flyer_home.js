class flyer_home{
    get loginButton(){
        return cy.get('nav > :nth-child(3) > .MuiButton-label')
    }
    get postFlyerButton(){
        return cy.get(':nth-child(2) > .MuiButton-label > a')
    }  
    clickLoginButton(){
        this.loginButton.click()
    }
    clickPostFlyerButton(){
        this.postFlyerButton.click()
    }
} module.exports=new flyer_home()
