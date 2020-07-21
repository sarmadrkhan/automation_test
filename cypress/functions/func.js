export function navigate() {
    cy.visit('https://google.com')
  }
  
  export function search(searchText) {
    cy.get('.gLFyf').type(searchText + '{enter}')
  }
  