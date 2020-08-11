export function navigate(myUrl) {
   cy.visit(myUrl)
}
  
export function googleSearch(searchText) {
  cy.get('.gLFyf').type(searchText + '{enter}')
}

export const range = (start, stop, step) => Array.from(
    {
      length: (stop - start) / step + 1
    },
      (_, i) => start + (i * step)
);

export function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}