import React, {useState} from 'react'
import './CountryCard.css'
import PropTypes from 'prop-types'
import heartPink from './assets/heartPink.png'
import heart from './assets/heart.png'

const CountryCard = ({ addCountryToDreamDestinations, removeFromDreamDestinations, name, flag, population, region, maps, id }) => {
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
      removeFromDreamDestinations(id)
    }
  }

  return (
    <div className='country-card'>
      <div className='country-name-header'>
        <h1 className='country-name'>{name}</h1>
        <div className='add-to-destinations-button-container'>
          <button className='add-to-destinations-button'
          aria-label="add-to-dream-destinations"
                  onClick={() => addCountry()}
          >
          {isFavorited ? <img src={heartPink} className='pink' alt='heart'/> : <img src={heart} className='heart' alt='heart'/> }
          </button>
        </div>
      </div>
      <img src={flag} className='flag-image' alt='country-flag'/>
      <div className='country-information-container'>
        <p>population: {population.toLocaleString()}</p>
        <p>{region}</p>
        <p><a href={maps} target='_blank'>Google Maps</a></p>
      </div>
    </div>
  )
}

export default CountryCard;

CountryCard.propTypes = {
  addCountryToDreamDestinations: PropTypes.func,
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  maps: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
