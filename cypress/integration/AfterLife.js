/// <reference types="cypress" />
require('cypress-commands');
import {
    navigate,
    googleSearch,
    range,
  } from '../functions/func'

describe('AfterLife', () => {
    
    it('should do the task 1 of the assignment', ()=>{
      // cy.fixture('myDataFile.json').then((myDataFile)=>{
      //   navigate(myDataFile[0].value)
      //   googleSearch(myDataFile[1].value)      
      //   cy.contains(myDataFile[2].value,{timeout:500}).click()
      //   cy.get('#titleCast > .see-more').click()
      //   cy.get('.cast_list > tbody > :nth-child(2) > :nth-child(2)')
      //   cy.end()
      // })
      //cy.visit('https://www.imdb.com/title/tt8398600/fullcredits?ref_=tt_cl_sm#cast')
      
      // var genArr1=range(2,114,2)
      // cy.wrap(genArr1).each((index) => {
      //   cy.get(`.cast_list > tbody > :nth-child(${index}) > :nth-child(2)`).then(($name)=>{
      //     const t_txt = $name.text()
      //     cy.log(t_txt)
      //   })
      // })//loop1
      
      // var genArr2=range(117,131,2)
      // cy.wrap(genArr2).each((index) => {
      //   cy.get(`.cast_list > tbody > :nth-child(${index}) > :nth-child(2)`).then(($name)=>{
      //     const t_txt = $name.text()
      //     cy.log(t_txt)
      //   })
      // })//loop2
      
      cy.qwerty('qaautomation.xlsx')  
      cy.sarmad('go left')     
      
  })//it
})//describe
