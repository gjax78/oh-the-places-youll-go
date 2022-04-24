# Oh The Places You'll Go...💭
Are you a disorganized, but passionate world traveler?! Countless hours spent daydreaming about all the destinations you want to visit but no single place to keep them organized?

<strong>[Oh The Places You'll Go](https://ohtheplaces.herokuapp.com/)</strong> is the application for you. Upon visiting the app, all world countries will be displayed for you. Feel free to scroll or search through the destinations and 'favorite' them along the way. Pack your bags, and click on the suitcase icon in the upper left-hand corner to view all of your dream destinations. Happy traveling!

![gif](https://user-images.githubusercontent.com/88151743/164987959-9bfcfe06-9c91-44a4-880c-e3f0a9ff0785.gif)

### Table of Contents
- [Abstract](#oh-the-places-youll-go)
- [Technologies](#technologies)
- [Code Architecture](#code-architecture)
- [Installation](#installation)
- [Features](#features)
- [Scaling](#scaling)
- [Author](#author)

### Technologies
- React.js
- React Router
- CSS
- HTML
- Cypress
- RESTful APIs
- Figma

### Code Architecture
  - __src__
    - __Components__
      - __App__
        - [App.css](src/App/App.css)
        - [App.js](src/App/App.js)
      - __Countries__
        - [Countries.css](src/components/Countries/Countries.css)
        - [Countries.js](src/components/Countries/Countries.js)
      - __CountryCard__
        - [CountryCard.css](src/components/CountryCard/CountryCard.css)
        - [CountryCard.js](src/components/CountryCard/CountryCard.js)
      - __DreamCountryCard__
        - [DreamCountryCard.css](src/components/DreamCountryCard/DreamCountryCard.css)
        - [DreamCountryCard.js](src/components/DreamCountryCard/DreamCountryCard.js)
      - __DreamDestinations__
        - [DreamDestinations.css](src/components/DreamDestinations/DreamDestinations.css)
        - [DreamDestinations.js](src/components/DreamDestinations/DreamDestinations.js)
      - __DreamDestinationsError__
        - [DreamDestinationsError.css](src/components/DreamDestinationsError/DreamDestinationsError.css)
        - [DreamDestinationsError.js](src/components/DreamDestinationsError/DreamDestinationsError.js)
      - __Error__
        - [Error.css](src/components/Error/Error.css)
        - [Error.js](src/components/Error/Error.js)
      - __Header__
        - [Header.css](src/components/Header/Header.css)
        - [Header.js](src/components/Header/Header.js)
      - __Search__
        - [Search.css](src/components/Search/Search.css)
        - [Search.js](src/components/Search/Search.js)
      - __Spinner__
        - [Spinner.css](src/components/Spinner/Spinner.css)
        - [Spinner.js](src/components/Spinner/Spinner.js)
    - [apiCalls.js](src/apiCalls.js)
    - [index.css](src/index.css)
    - [index.js](src/index.js)


### Installation
- Deployed site [here](https://ohtheplaces.herokuapp.com/)

To view the code:
- Clone down the Repository
- cd into repository
- run `npm install`
- run `npm start`
- webpage will open in separate browser

### Features
- Users can 'favorite' and 'unfavorite' a destination
- Users can search destinations
- 100% Lighthouse Accessibility score
- Loading symbol shows as site is fetching data
- Responsive Design
- Error handling

![gif](https://user-images.githubusercontent.com/88151743/164988210-404648f1-298d-454e-a76a-aba001db1361.gif)

![gif](https://user-images.githubusercontent.com/88151743/164988489-6b987026-743c-47cf-be27-677d8ccd8dbe.gif)

### Future Additions
- Feature a login page to store user data
- Incorporate a journal entry spot so users can have a place to jot travel notes down
- Implement a secondary API for additional country information
- Add a 'been there' page so users can add destinations they've already visited

### Author
- [Geena Jackson](https://github.com/gjax78)
