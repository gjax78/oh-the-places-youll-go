import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import Countries from '../Countries/Countries'
import DreamDestinations from '../DreamDestinations/DreamDestinations'
import Search from '../Search/Search'
import Error from '../Error/Error'
import fetchData from '../../apiCalls'

const App = () => {
  const [countries, setCountries] = useState([])
  const [dreamDestination, setDreamDestination] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const countriesResult = await fetchData.getData()
        setCountries(countriesResult)
      } catch(error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search) || country.name.common.includes(search));

  const addCountryToDreamDestinations = (favoritedCountry) => {
    setDreamDestination([...dreamDestination, favoritedCountry])
  }

  const removeFromDreamDestinations = (favoritedCountry) => {
    const filteredCountries = dreamDestination.filter(country => country.id !== favoritedCountry);

    setDreamDestination(filteredCountries);
  }

  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Search search={search} setSearch={setSearch}/>
        <Countries
        isLoading={isLoading}
        countries={filteredCountries}
        addCountryToDreamDestinations={addCountryToDreamDestinations}
        removeFromDreamDestinations={removeFromDreamDestinations}
        />
      </Route>
      <Route exact path='/dream-destinations'>
        <DreamDestinations
        dreamDestination={dreamDestination}
        removeFromDreamDestinations={removeFromDreamDestinations}
        />
      </Route>
      <Route >
        <Redirect to='/error' />
        <Error
          error={error}
        />
      </Route>
    </Switch>
    </>
  )
}

export default App;
