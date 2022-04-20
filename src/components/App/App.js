import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Countries from '../Countries/Countries'
import DreamDestinations from '../DreamDestinations/DreamDestinations'
import fetchData from '../../apiCalls';

const App = () => {
  const [countries, setCountries] = useState([])
  const [dreamDestination, setDreamDestination] = useState([])

  const fetchCountries = () => {
    fetchData.getData()
    .then(data => setCountries(data))
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const addCountryToDreamDestinations = (favoritedCountry) => {
    setDreamDestination([...dreamDestination, favoritedCountry])
  }

  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Countries
        countries={countries}
        addCountryToDreamDestinations={addCountryToDreamDestinations}
        />
      </Route>

      <Route exact path='/dream-destinations'>
        <DreamDestinations />
      </Route>
    </Switch>
  )
}

export default App;
