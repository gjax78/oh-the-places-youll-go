import './DreamDestinations.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import Countries from '../Countries/Countries'
import CountryCard from '../CountryCard/CountryCard'

const DreamDestinations = ({ dreamDestination }) => {
  const dreamCountries = dreamDestination.map(dreamCountry => {
    return (
      <div className='dream-destinations' key={dreamCountry.id} >
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

DreamDestinations.propTypes = {
  dreamDestination: PropTypes.array.isRequired
}
