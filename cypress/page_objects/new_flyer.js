class new_flyer{
    get titleField(){
        return cy.get('form > :nth-child(1) > .MuiInputBase-root')
    }
    get textForTitle(){
        return cy.get('.MuiBox-root > .MuiTypography-h6')
    }
    get descriptionField(){
        return cy.get('form > :nth-child(2) > .MuiInputBase-root')
    }
    get filledDescriptionField(){
        return cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get phoneField(){
        return cy.get('.jss656 > .MuiInputBase-root > .MuiInputBase-input')
    }
    get addressField(){
        return cy.get('.jss686 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    get tagField(){
        return cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    get postButton(){
        return cy.get('.MuiButton-contained > .MuiButton-label')
    }
    get homeButton(){
        return cy.get(':nth-child(1) > .MuiButton-label > a')
    }
    copyAndPasteTitle(){
        this.textForTitle.then( ($title) => {
            const t_txt = $title.text()
            this.titleField.type(`${t_txt}`)
        })
    }  
    copyAndPasteDescription(myArray){
        cy.wrap(myArray).each((index) => {
               cy.get(`:nth-child(${index}) > .MuiListItemText-root > .MuiTypography-root`).then(($bullet)=>{
                 const txt = $bullet.text()
                 this.descriptionField.type(`${txt}`+'{enter}')
               })
             })
    }
    scrollDown(){
        this.filledDescriptionField.scrollTo('bottom')
    } 
    typePhone(myPhone){
        this.phoneField.type(myPhone)
    }
    typeAddress(myAddress){
        this.addressField.type(myAddress)
    }
    addTag(myTag){
        this.tagField.type(myTag + '{enter}')
    }
    post(){
        this.postButton.click()
    }
    clickHomeButton(){
        this.homeButton.click()
    }
} module.exports=new new_flyer()
