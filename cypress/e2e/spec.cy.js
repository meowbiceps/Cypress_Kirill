describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/');
    cy.get('[action="/search"] textarea').should('be.visible');
    cy.get('[action="/search"] textarea').type('Kyrylo is starter AQA')
    cy.get('[action="/search"] svg').click
  })
})