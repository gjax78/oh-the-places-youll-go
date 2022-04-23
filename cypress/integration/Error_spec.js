describe('App inital page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
      statusCode: 200,
      fixture: 'countries.json'
    })
    cy.visit('http://localhost:3000/fkjdlaj');
  })

  it('should display an error message', () => {
    cy.get('.error-container')
     .should('have.text', 'Flight delayed... Please check back later.')
     .url().should('include', '/error')
    })

    it('should have a header', () => {
      cy.get('.header').first()
       .should('have.text', 'OH THE PLACES YOU\'LL GO')
      cy.get('.home-button')
       .should('be.visible')
      cy.get('.dream-destinations-button')
        .should('be.visible')
  })

  it('should be able to get back to the home page', () => {
    cy.get('.header').first()
     .should('have.text', 'OH THE PLACES YOU\'LL GO')
    cy.get('.home-button')
     .should('be.visible')
    cy.get('.dream-destinations-button')
      .should('be.visible')
      cy.get('.home-button')
       .click()
    })

  it('should display all countries once back on the home page', () => {
    cy.get('.header').first()
     .should('have.text', 'OH THE PLACES YOU\'LL GO')
    cy.get('.home-button')
     .should('be.visible')
    cy.get('.dream-destinations-button')
      .should('be.visible')
      cy.get('.home-button')
        .click()
        .get('.country-name')
          .contains('Uruguay')
        .get('.country-information-container')
          .contains('population: 3473727')
        .get('.country-information-container')
          .contains('Americas')
        .get('.country-information-container')
          .contains('Google Maps')
    })
})
