/// <reference types="cypress" />
require('cypress-commands');
import {
    navigate,
    range,
  } from '../functions/func'


// * Data *
var firstname='Mandeep Dhillon';
var lastname='Sandy';

  describe('Flyers', () => {
    it('should do the task 2 of the assingment',()=>{
      cy.fixture('myDataFile.json').then((myDataFile)=>{
        navigate(myDataFile[3].value)
        cy.get('nav > :nth-child(3) > .MuiButton-label').click()
        cy.get('form > .MuiBox-root > .MuiTypography-root').click()
        cy.get('.jss418 > .MuiInputBase-root > .MuiInputBase-input').type(firstname)
        cy.get('.jss422 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(lastname)
        cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(myDataFile[4].value)  
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type(myDataFile[5].value)
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type(myDataFile[5].value)
        cy.get('.jss423 > .MuiTypography-root').click() 
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(myDataFile[4].value) //username
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(myDataFile[5].value) //password
        cy.get('.MuiButton-label').click() //click on sign in
        cy.get(':nth-child(2) > .MuiButton-label > a').click() // click on post a flyer
        //var a = cy.get('.MuiBox-root > .MuiTypography-h6').text()
        //cy.get('form > :nth-child(1) > .MuiInputBase-root').type(`${a}`)

        //title
        cy.get('.MuiBox-root > .MuiTypography-h6').then(($title) => { 
          const t_txt = $title.text()
          cy.get('form > :nth-child(1) > .MuiInputBase-root').type(`${t_txt}`)
        })

        //description
        var genArr=range(1,9,2)
        cy.wrap(genArr).each((index) => {
          cy.get(`:nth-child(${index}) > .MuiListItemText-root > .MuiTypography-root`).then(($bullet)=>{
            const txt = $bullet.text()
            cy.get('form > :nth-child(2) > .MuiInputBase-root').type(`${txt}`+'{enter}')
          })
        })
        //scroll to bottom to view the last line
        cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').scrollTo('bottom')    

        cy.get('.jss656 > .MuiInputBase-root > .MuiInputBase-input').type(myDataFile[6].value) //phone number
        cy.get('.jss686 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(myDataFile[7].value) //address
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type(myDataFile[8].value +'{enter}') //tag1
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type(myDataFile[9].value+'{enter}')  //tag2
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type(myDataFile[10].value+'{enter}') //tag3
        cy.get('.MuiButton-contained > .MuiButton-label').click() //post button
        cy.get(':nth-child(1) > .MuiButton-label > a').click() //home button
        cy.wait(10000)
        cy.reload()
        cy.wait(3000)
        cy.screenshot('Post a flyer')
      })  
    })
  })