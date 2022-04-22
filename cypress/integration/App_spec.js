describe('App inital page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
      statusCode: 200,
      fixture: 'countries.json'
    })
    cy.visit('http://localhost:3000/');
  })

  it('should display a header with a button for Home and a button for Dream Destinations', () => {
    cy.get('*[class^="header"]').first()
     .should('have.text', 'OH THE PLACES YOU\'LL GO')
    cy.get('*[class^="home-button"]')
     .should('be.visible')
    cy.get('*[class^="dream-destinations-button"]')
      .should('be.visible')
    })

  it('should have a search bar to search countries', () => {
    cy.get('form input[placeholder="Search destinations"]')
      .get('form input[type="text"]')
      .get('*[class^="controlled-search"]')
  })

  it('should display all countries on the main page', () => {
    cy.get('*[class^="countryCard-container"]')
      .get('*[class^="country-name"]')
        .contains('Uruguay')
      .get('*[class^="country-information-container"]')
        .contains('population: 3473727')
      .get('*[class^="country-information-container"]')
        .contains('Americas')
      .get('*[class^="country-information-container"]')
        .contains('Google Maps')
  })

  it('should display all countries on the main page', () => {
    cy.get('*[class^="countryCard-container"]')
      .get('*[class^="country-name"]')
        .contains('Paraguay')
      .get('*[class^="country-information-container"]')
        .contains('population: 7132530')
      .get('*[class^="country-information-container"]')
        .contains('Americas')
      .get('*[class^="country-information-container"]')
        .contains('Google Maps')
  })

  it('should have a button to add the country to dream destinations', () => {
    cy.get('*[class^="add-to-destinations-button"]')
      .should('be.visible')
  })

  it('should be able to click on the button and be directed to the dream destination page', () => {
    cy.get('*[class^="add-to-destinations-button"]')
    .first().click()
    cy.get('*[class^="dream-destinations-button"]')
    .click()
  })

  it('should display the favorited country', () => {
    cy.get('*[class^="add-to-destinations-button"]')
    .first().click()
    cy.get('*[class^="dream-destinations-button"]')
    .click()
    .url().should('include', '/dream-destinations')
    cy.get('*[class^="dream-destinations"]')
      .get('*[class^="country-name"]')
        .contains('Uruguay')
      .get('*[class^="country-information-container"]')
        .contains('population: 3473727')
      .get('*[class^="country-information-container"]')
        .contains('Americas')
      .get('*[class^="country-information-container"]')
        .contains('Google Maps')
  })

  it('should be able to click on the home button and be directed back to the home page', () => {
    cy.get('*[class^="add-to-destinations-button"]')
    .first().click()
    cy.get('*[class^="dream-destinations-button"]')
    .click()
    cy.get('*[class^="dream-destinations"]')
      .get('*[class^="country-name"]')
        .contains('Uruguay')
      .get('*[class^="country-information-container"]')
        .contains('population: 3473727')
      .get('*[class^="country-information-container"]')
        .contains('Americas')
      .get('*[class^="country-information-container"]')
        .contains('Google Maps')
    cy.get('*[class^="home-button"]')
    .click()
  })

  it('should display all countries once being directed back to the home page', () => {
    cy.get('*[class^="add-to-destinations-button"]')
    .first().click()
    cy.get('*[class^="dream-destinations-button"]')
    .click()
    cy.get('*[class^="dream-destinations"]')
      .get('*[class^="country-name"]')
        .contains('Uruguay')
      .get('*[class^="country-information-container"]')
        .contains('population: 3473727')
      .get('*[class^="country-information-container"]')
        .contains('Americas')
      .get('*[class^="country-information-container"]')
        .contains('Google Maps')
    cy.get('*[class^="home-button"]')
    .click()
    .get('*[class^="country-name"]')
      .contains('Paraguay')
  })
})
