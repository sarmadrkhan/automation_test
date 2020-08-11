/// <reference types="cypress" />
require('cypress-commands');
import {
    navigate,
    range,
  } from '../functions/func'
import flyer_home from '../page_objects/flyer_home'
import new_user from '../page_objects/new_user_form'
import existing_user from '../page_objects/existing_user_form'
import new_flyer from '../page_objects/new_flyer'
var firstname;
var lastname;
var aNewVar;
  describe('Flyers', () => {
    it('should do the task 2 of the assingment',()=>{
      cy.fixture('myDataFile.json').then((myDataFile)=>{
        cy.fixture('myNewCast.json').then((newCast)=>{
          // data from series cast
          aNewVar=newCast[4]
          firstname=aNewVar.Name
          lastname=aNewVar[`Character Name`]
          // data from input sheet
          navigate(myDataFile[3].value)


          flyer_home.clickLoginButton()
          existing_user.clickNewUserButton()
          new_user.typeFirstName(firstname)
          new_user.typeLastName(lastname)
          new_user.typeEmail(myDataFile[4].value)
          new_user.typePassword(myDataFile[5].value)
          new_user.typeConfirmPassword(myDataFile[5].value)
          new_user.clickExistingUserButton()
          existing_user.typeEmail(myDataFile[4].value) //username
          existing_user.typePassword(myDataFile[5].value)
          existing_user.clickSignInButton()
          flyer_home.clickPostFlyerButton()
                       
          //title
          new_flyer.copyAndPasteTitle()
            
          //description
          var genArr=range(1,9,2)
          new_flyer.copyAndPasteDescription(genArr)
           
          //scroll to bottom to view the last line
          new_flyer.scrollDown()
     
          new_flyer.typePhone(myDataFile[6].value) //phone number
          new_flyer.typeAddress(myDataFile[7].value) //address
            
          new_flyer.addTag(myDataFile[8].value)  //tag1
          new_flyer.addTag(myDataFile[9].value)  //tag2
          new_flyer.addTag(myDataFile[10].value) //tag3
    
          new_flyer.post()
          new_flyer.clickHomeButton() //go to home page
          cy.wait(10000)
          cy.reload()
          cy.wait(3000)
          cy.screenshot('Post a flyer')
        })   
      })  
    })
  })