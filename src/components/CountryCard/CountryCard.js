import React, {useState} from 'react';
import './CountryCard.css';
import heart from './heart.png'

const CountryCard = ({ name, flag, population, region, maps }) => {
  return (
    <div className='country-card'>
      <div className='country-name-header'>
        <h1 className='country-name'>{name}</h1>
        <div className='add-to-destinations-button-container'>
          <button className='add-to-destinations-button'><img src={heart}/></button>
        </div>
      </div>
      <img src={flag} className='flag-image'/>
      <div className='country-information-container'>
        <p>population: {population}</p>
        <p>{region}</p>
        <a href={maps}>Google Maps</a>
      </div>
    </div>
  )
}

export default CountryCard;
