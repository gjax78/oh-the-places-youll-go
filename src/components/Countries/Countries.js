import React from 'react'
import './Countries.css'
import PropTypes from 'prop-types'
import CountryCard from '../CountryCard/CountryCard'
import Spinner from '../Spinner/Spinner'

const Countries = ({ countries, addCountryToDreamDestinations, removeFromDreamDestinations, isLoading }) => {
  const countryCards = countries.map(country => {
    return (
      <div className='countryCard-container' key={country.cca2}>
        <CountryCard
          id={country.cca2}
          flag={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          maps={country.maps.googleMaps}
          addCountryToDreamDestinations={addCountryToDreamDestinations}
          removeFromDreamDestinations={removeFromDreamDestinations}
        />
      </div>
    )
  })

  return isLoading ? (
      <Spinner />
    ) :
    <div className='countryCard-container'>
      {countryCards}
    </div>
}

export default Countries;

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  addCountryToDreamDestinations: PropTypes.func.isRequired
}
