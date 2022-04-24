import React from 'react'
import './DreamCountryCard.css'
import trash from './trash.png'

const DreamCountryCard = ({ addCountryToDreamDestinations, removeFromDreamDestinations, name, flag, population, region, maps, id }) => {

  return (
    <div className='country-card'>
      <div className='country-name-header'>
        <h1 className='country-name'>{name}</h1>
        <div className='delete-button-container'>
          <button
          className='delete-button'
          aria-label="delete-from-dream-destinations"
          onClick={() => removeFromDreamDestinations(id)}>
          <img src={trash} className='trash' alt='trash-can'/>
          </button>
        </div>
      </div>
      <img src={flag} className='flag-image' alt='country-flag'/>
      <div className='country-information-container'>
        <p>population: {population}</p>
        <p>{region}</p>
        <a href={maps}>Google Maps</a>
      </div>
    </div>
  )
}

export default DreamCountryCard;
