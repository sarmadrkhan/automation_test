/// <reference types="cypress" />
import {
    navigate,
  } from '../functions/func'

  
  var Excel = require('exceljs');
  var workbook = new Excel.Workbook();
  workbook.xlsx.readFile("D:/temp2/my_resources/qaautomation.xlsx")
    .then(function() {
        ws = workbook.getWorksheet("Input")
        my_URL = ws.getCell('B2').value
        return my_URL;
    });



// * Data *
var firstname='Mandeep Dhillon';
var lastname='Sandy';
var email='tony.way@gmail.com';
var password=12345678;  
var title='Post a flyer';
var description= '1. Be honest\n2. Remember the human\n3. Behave like you would in real life\n4. Search for duplicates before posting\n5. Read the first rule again';

  describe('Flyers', () => {
    it('should do the task 2 of the assingment',()=>{
      navigate('https://emumba-test.herokuapp.com/')
      cy.get('nav > :nth-child(3) > .MuiButton-label').click()
      cy.get('form > .MuiBox-root > .MuiTypography-root').click()
      cy.get('.jss418 > .MuiInputBase-root > .MuiInputBase-input').type(firstname)
      cy.get('.jss422 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(lastname)
      cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(email)
      cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type(password)
      cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type(password)
      cy.get('.jss423 > .MuiTypography-root').click()
      cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type(email)
      cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(password)
      cy.get('.MuiButton-label').click()
      cy.get(':nth-child(2) > .MuiButton-label > a').click()
      cy.get('.MuiBox-root > .MuiTypography-h6').trigger('mousedown')
      // //cy.get('#root div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4 h6').dispatchEvent(new Event('mousedown',{'bubbles': true}))
      //dat = cy.get('.MuiBox-root > .MuiTypography-h6').then(($btn) => { const txt = $btn.text()})
      cy.get('form > :nth-child(1) > .MuiInputBase-root').type(title)
      cy.get('form > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type(description).scrollTo('bottom')
      cy.get('.jss656 > .MuiInputBase-root > .MuiInputBase-input').type(30012345678)
      cy.get('.jss686 > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Emumba Pvt. Limited, Korang Road I-10/3 Islamabad.')
      cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('hello there'+'{enter}')
      cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('covid 19'+'{enter}')
      cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('zara hut k'+'{enter}')
      cy.get('.MuiButton-contained > .MuiButton-label').click()
      cy.get(':nth-child(1) > .MuiButton-label > a').click()
      cy.wait(10000)
      cy.reload()
      cy.wait(3000)
      cy.screenshot('Post a flyer')

    })
  })