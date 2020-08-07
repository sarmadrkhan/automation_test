/// <reference types="cypress" />
require('cypress-commands');
import {
    navigate,
    googleSearch,
    range,
  } from '../functions/func'

describe('AfterLife', () => {
    
    it('should do the task 1 of the assignment', ()=>{
      cy.fixture('myDataFile.json').then((myDataFile)=>{
      navigate(myDataFile[0].value)
      googleSearch(myDataFile[1].value)      
      cy.contains(myDataFile[2].value,{timeout:500}).click()
      cy.contains('See full cast').click()
      var genArr1=range(2,114,2)
      var genArr2=range(117,131,2)
      //var arrlength=genArr1.length+genArr2.length
      var names=[] // array for saving real names
      var chNames=[] // array for saving char names
      var appearance=[] // array for saving appearances

      cy.wrap(genArr1).each((index) => {
        cy.get(`.cast_list > tbody > :nth-child(${index}) > :nth-child(2)`).then(($name)=>{
          const t_txt = $name.text()
          names.push(t_txt)
        })
      })//loop1
      cy.wrap(genArr1).each((index) => {
        cy.get(`:nth-child(${index}) > .character`).then(($name)=>{
          const t_txt= $name.text().split('\n')[1]
          chNames.push(t_txt)
        })
      })//loop1-chNames
      cy.wrap(genArr1).each((index) => {
        cy.get(`:nth-child(${index}) > .character > .toggle-episodes`).then(($name)=>{
          const t_txt= $name.text()
          appearance.push(t_txt)
        })
      })//loop1-Appearance
      
      cy.wrap(genArr2).each((index) => {
        cy.get(`.cast_list > tbody > :nth-child(${index}) > :nth-child(2)`).then(($name)=>{
          const t_txt = $name.text()
          names.push(t_txt)
        })
      })//loop2
      cy.wrap(genArr2).each((index) => {
        cy.get(`:nth-child(${index}) > .character`).then(($name)=>{
          const t_txt= $name.text().split('\n')[1]
          chNames.push(t_txt)
        })
      })//loop2-chNames
      cy.wrap(genArr2).each((index) => {
        cy.get(`:nth-child(${index}) > .character > .toggle-episodes`).then(($name)=>{
          const t_txt= $name.text()
          appearance.push(t_txt)
        })
      })//loop2-Appearance
       
      var fName=[]
      cy.wrap(names).each(($el, index)=>{ 
        fName.push({Name:$el,'Character Name':chNames[index],Appearance:appearance[index]})
        cy.log(fName[index])
      })
      cy.writeFile('cypress/fixtures/myNewCast.json', fName)     
      cy.end()
    })
  })//it
})//describe
