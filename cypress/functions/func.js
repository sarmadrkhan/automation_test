export function navigate(myUrl) {
   cy.visit(myUrl)
}
  
  export function search(searchText) {
    cy.get('.gLFyf').type(searchText + '{enter}')
  }