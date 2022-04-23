import './DreamDestinations.css'
import React from 'react'
import PropTypes from 'prop-types'
import DreamCountryCard from '../DreamCountryCard/DreamCountryCard'

const DreamDestinations = ({ dreamDestination, removeFromDreamDestinations }) => {
  const dreamCountries = dreamDestination.map(dreamCountry => {
    return (
      <div className='dream-destinations' key={dreamCountry.id} >
        <DreamCountryCard
        removeFromDreamDestinations={removeFromDreamDestinations}
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
