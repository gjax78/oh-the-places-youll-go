import React, {useState} from 'react';
import './CountryCard.css';
import heart from './heart.png'
import heartPink from './heartPink.png'


const CountryCard = ({ addCountryToDreamDestinations, removeFavoritedCountryFromView, name, flag, population, region, maps, id }) => {
  const [isFavorited, setIsFavorited] = useState(false)

  const addCountry = () => {
    if (!isFavorited) {
      setIsFavorited(true)
      const favoritedCountry = {
        name: name,
        flag: flag,
        population: population,
        region: region,
        maps: maps,
        id: id
      }
      addCountryToDreamDestinations(favoritedCountry)
    } else {
      setIsFavorited(false)
    }
  }

  return (
    (!isFavorited) ?
    <div className='country-card'>
      <div className='country-name-header'>
        <h1 className='country-name'>{name}</h1>
        <div className='add-to-destinations-button-container'>
          <button className='add-to-destinations-button'
                  onClick={() => addCountry()}
          >
          {isFavorited ? <img src={heartPink} className='pink'/> : null }
          </button>
        </div>
      </div>
      <img src={flag} className='flag-image'/>
      <div className='country-information-container'>
        <p>population: {population}</p>
        <p>{region}</p>
        <a href={maps}>Google Maps</a>
      </div>
    </div>
  : null
  )
}

export default CountryCard;
