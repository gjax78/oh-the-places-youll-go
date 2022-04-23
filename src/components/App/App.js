import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import Countries from '../Countries/Countries'
import DreamDestinations from '../DreamDestinations/DreamDestinations'
import Search from '../Search/Search'
import Error from '../Error/Error'
import DreamDestinationsError from '../DreamDestinationsError/DreamDestinationsError'
import fetchData from '../../apiCalls'

const App = () => {
  const [countries, setCountries] = useState([])
  const [dreamDestination, setDreamDestination] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const countriesResult = await fetchData.getData()

        if ({search} === null) {
          setCountries(countriesResult)
        } else if ({ search }) {
          setCountries(countriesResult.filter(country => country.name.common.toLowerCase().includes(search)))
        }
      } catch(error) {
        setError(error.message)
      }
    }
    fetchItems()
  }, [search])

  const addCountryToDreamDestinations = (favoritedCountry) => {
    setDreamDestination([...dreamDestination, favoritedCountry])
  }


  const removeFromDreamDestinations = (favoritedCountry) => {
    const filteredCountries = dreamDestination.filter(country => country.id != favoritedCountry);

    setDreamDestination(filteredCountries);
  }

  return (
    <Switch>
      <Route exact path='/'>
      <Header />
        <Search getSearch={(e) => setSearch(e)}/>
        <Countries
        countries={countries}
        addCountryToDreamDestinations={addCountryToDreamDestinations}
        />
      </Route>
      <Route exact path='/dream-destinations'>
      {dreamDestination.length ?
        <>
        <Header />
        <DreamDestinations
        dreamDestination={dreamDestination}
        removeFromDreamDestinations={removeFromDreamDestinations}/>
        </>
        :
        <>
        <Header />
        <DreamDestinationsError />
        </>
      }
      </Route>
      <Route >
        <Redirect to='/error' />
        <Header />
        <Error
          error={ error }
        />
      </Route>
    </Switch>
  )
}

export default App;
