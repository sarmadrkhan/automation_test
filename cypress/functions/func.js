export function navigate() {
    cy.visit('https://google.com.pk')
  }
  
  export function search(searchText) {
    cy.get('.gLFyf').type(searchText + '{enter}')
  }
  
  //trying for fun