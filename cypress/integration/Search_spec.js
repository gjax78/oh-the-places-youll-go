describe('App inital page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
      statusCode: 200,
      fixture: 'countries.json'
    })
    cy.visit('http://localhost:3000/');
  })

  it('should display a header with a button for Home and a button for Dream Destinations', () => {
    cy.get('.header').first()
     .should('have.text', 'OH THE PLACES YOU\'LL GO')
    cy.get('.home-button')
     .should('be.visible')
    cy.get('.dream-destinations-button')
      .should('be.visible')
    })

    it('should be able to search for a country', () => {
      cy.get('form input[placeholder="Search destinations')
        .get('form input[type="text')
        .get('.controlled-search')
        .type('Uruguay')
        .should('have.value', 'Uruguay')
    })
})
