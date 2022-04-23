import React from 'react'

const DreamCountryCard = ({ addCountryToDreamDestinations, removeFromDreamDestinations, name, flag, population, region, maps, id }) => {

  return (
    <div className='country-card'>
      <div className='country-name-header'>
        <h1 className='country-name'>{name}</h1>
      </div>
      <button
       className='delete-button'
       onClick={() => removeFromDreamDestinations(id)}>
       Remove
     </button>
      <img src={flag} className='flag-image'/>
      <div className='country-information-container'>
        <p>population: {population}</p>
        <p>{region}</p>
        <a href={maps}>Google Maps</a>
      </div>
    </div>
  )
}

export default DreamCountryCard;
