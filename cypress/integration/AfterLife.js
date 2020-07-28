/// <reference types="cypress" />
import {
    navigate,
    googleSearch,
  } from '../functions/func'

  
  var Excel = require('exceljs');
  var workbook = new Excel.Workbook();
  workbook.xlsx.readFile("D:/temp2/my_resources/qaautomation.xlsx")
    .then(function() {
        ws = workbook.getWorksheet("Input")
        my_URL = ws.getCell('B2').value
        return my_URL;
    });

describe('imdb', () => {
    
    it('should do the task 1 of the assingment', ()=>{
      navigate('https://www.google.com/')
      googleSearch('After Life')      
      cy.get('[href="https://www.imdb.com/title/tt8398600/"] > .LC20lb',{timeout:500}).click()
      cy.get('#titleCast > .see-more').click()
      cy.get('.cast_list > tbody > :nth-child(2) > :nth-child(2)')
      cy.end()
      // for(var count1=2;count1>=114;count1+=2){
      //   cy.get(`.cast_list > tbody > :nth-child(${count1}) > :nth-child(2)`).trigger('mousedown')
      // }
      // for(var count2=117;count2>=131;count2+=2){
      //   cy.get(`.cast_list > tbody > :nth-child(${count2}) > :nth-child(2)`).trigger('mousedown')
      // } 
    })
  })