import React, {useState} from 'react';
import './CountryCard.css';
import PropTypes from 'prop-types';
import heart from './heart.png'
import heartPink from './heartPink.png'


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

CountryCard.propTypes = {
  addCountryToDreamDestinations: PropTypes.func,
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  maps: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
