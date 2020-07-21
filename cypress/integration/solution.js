/// <reference types="cypress" />
import {
    navigate,
    search,
  } from '../functions/func'
  
  describe('automation assignment', () => {
    
    before(() => {
      navigate()
    })
   
    beforeEach(() =>
    cy.eyesOpen({
      appName: 'assingment',
      batchName: '1st batch',
    })
    )

    afterEach(()=> cy.eyesClose())

    it.only('should search After Life', ()=>{
      search('After Life')
      cy.contains('After Life (TV Series 2019– ) - IMDb').click()
      cy.contains('See full cast').click()
    })
    it('should select the desired link',()=>{
      
    })
    it('should display full cast',()=>{

    })
    
  })