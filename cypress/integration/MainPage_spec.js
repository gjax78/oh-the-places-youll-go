describe('Dashboard inital page load', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all', {
      statusCode: 200,
      fixture: 'countries.json'
    })
    cy.visit('http://localhost:3000/');
  })

  it('should display a header with a button for Home and a button for Dream Destinations', () => {
    cy.get('*[class^="header"]')
     .should('have.text', 'OH THE PLACES YOU\'LL GOOH THE PLACES YOU\'LL GOOH THE PLACES YOU\'LL GO')
    cy.get('*[class^="home-button"]')
     .should('be.visible')
    cy.get('*[class^="dream-destinations-button"]')
      .should('be.visible')
    })
})
