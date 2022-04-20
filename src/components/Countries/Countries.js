import React, {useState} from 'react';
import './Countries.css';
import CountryCard from '../CountryCard/CountryCard'

const Countries = ({ countries }) => {
  const countryCards = countries.map(country => {
    return (
      <div className='countryCard-container' key={country.ccn3}>
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
