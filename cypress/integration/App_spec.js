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

  it('should have a search bar to search countries', () => {
    cy.get('form input[placeholder="Search destinations"]')
      .get('form input[type="text"]')
      .get('.controlled-search')
  })

  it('should display all countries on the main page', () => {
    cy.get('.countryCard-container')
      .get('.country-name')
        .contains('Uruguay')
      .get('.country-information-container')
        .contains('population: 3,473,727')
      .get('.country-information-container')
        .contains('Americas')
      .get('.country-information-container')
        .contains('Google Maps')
  })

  it('should display all countries on the main page', () => {
    cy.get('.countryCard-container')
      .get('.country-name')
        .contains('Paraguay')
      .get('.country-information-container')
        .contains('population: 7,132,530')
      .get('.country-information-container')
        .contains('Americas')
      .get('.country-information-container')
        .contains('Google Maps')
  })

  it('should have a button to add the country to dream destinations', () => {
    cy.get('*[class^="add-to-destinations-button"]')
      .should('be.visible')
  })

  it('should be able to click on the button and be directed to the dream destination page', () => {
    cy.get('.add-to-destinations-button')
    .first().click()
    cy.get('.dream-destinations-button')
    .click()
  })

  it('should display the favorited country', () => {
    cy.get('.add-to-destinations-button')
    .first().click()
    cy.get('.dream-destinations-button')
    .click()
    .url().should('include', '/dream-destinations')
    cy.get('.dream-destinations')
      .get('.country-name')
        .contains('Uruguay')
      .get('.country-information-container')
        .contains('population: 3473727')
      .get('.country-information-container')
        .contains('Americas')
      .get('.country-information-container')
        .contains('Google Maps')
  })

  it('should be able to click on the home button and be directed back to the home page', () => {
    cy.get('.add-to-destinations-button')
    .first().click()
    cy.get('.dream-destinations-button')
    .click()
    cy.get('.dream-destinations')
      .get('.country-name')
        .contains('Uruguay')
      .get('.country-information-container')
        .contains('population: 3473727')
      .get('.country-information-container')
        .contains('Americas')
      .get('.country-information-container')
        .contains('Google Maps')
    cy.get('.home-button')
    .click()
  })

  it('should display all countries once being directed back to the home page', () => {
    cy.get('.add-to-destinations-button')
    .first().click()
    cy.get('.dream-destinations-button')
    .click()
    cy.get('.dream-destinations')
      .get('.country-name')
        .contains('Uruguay')
      .get('.country-information-container')
        .contains('population: 3473727')
      .get('.country-information-container')
        .contains('Americas')
      .get('.country-information-container')
        .contains('Google Maps')
    cy.get('.home-button')
    .click()
    .get('.country-name')
      .contains('Paraguay')
  })
})
