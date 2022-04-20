import './DreamDestinations.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Countries from '../Countries/Countries'
import CountryCard from '../CountryCard/CountryCard'

const DreamDestinations = ({ dreamDestination }) => {
  const dreamCountries = dreamDestination.map(dreamCountry => {
    return (
      <div className='dream-destinations'>
        <CountryCard
          {...dreamCountry}
        />
      </div>
    )
  })

  return (
    <div className='dream-destinations'>
      {dreamCountries}
    </div>
  )
}

export default DreamDestinations;
