import React, {useState} from 'react';
import './Countries.css';
import CountryCard from '../CountryCard/CountryCard'

const Countries = ({ countries }) => {
  const countryCards = countries.map(country => {
    return (
      <div className='countryCard-container' key={country.cca2}>
        <CountryCard
          id={country.cca2}
          name={country.name.common}
          population={country.population}
          region={country.region}
          maps={country.maps.googleMaps}
        />
      </div>
    )
  })

  return (
    <div className='countryCard-container'>
      {countryCards}
    </div>
  )
}

export default Countries;
