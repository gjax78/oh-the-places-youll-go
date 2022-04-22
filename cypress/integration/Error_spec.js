describe('App inital page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
      statusCode: 200,
      fixture: 'countries.json'
    })
    cy.visit('http://localhost:3000/fkjdlaj');
  })

  it('should display an error message', () => {
    cy.get('*[class^="error-container"]')
     .should('have.text', 'Flight delayed... Please check back later.')
     .url().should('include', '/error')
    })
  })
