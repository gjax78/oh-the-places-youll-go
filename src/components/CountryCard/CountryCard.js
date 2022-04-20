import React, {useState} from 'react';
import './CountryCard.css';

const CountryCard = ({ name, population, region, maps }) => {
  return (
    <div className='country-card'>
      <h1>{name}</h1>
      <p>population: {population}</p>
      <p>{region}</p>
      <a href={maps}>Google Maps</a>
      <button className='add-to-destinations-button'>♥️</button>
    </div>
  )
}

export default CountryCard;
