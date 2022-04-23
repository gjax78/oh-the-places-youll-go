describe('App inital page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
      statusCode: 200,
      fixture: 'countries.json'
    })
    cy.visit('http://localhost:3000/dream-destinations');
  })

  it('should click on dream destinations without adding any to the list', () => {
    cy.get('.dream-destinations-button')
    .click()
    })

  it('should display an error message', () => {
    cy.get('.error-container')
     .should('have.text', 'You haven\'t added any dream destinations. Add some countries to your bucket list!')
     .url().should('include', '/dream-destinations')
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
