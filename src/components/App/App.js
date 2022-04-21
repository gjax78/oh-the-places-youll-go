import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from '../Header/Header'
import Countries from '../Countries/Countries'
import DreamDestinations from '../DreamDestinations/DreamDestinations'
import Search from '../Search/Search'
import Error from '../Error/Error'
import fetchData from '../../apiCalls';

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
          console.log(error.message)
          setError(error.message)
        }
      }
      fetchItems()

  }, [search])

  const addCountryToDreamDestinations = (favoritedCountry) => {
    setDreamDestination([...dreamDestination, favoritedCountry])
  }

  return (
    <Switch>
    {error && <Redirect to='/error' />}
      <Route exact path='/'>
      <Header />
        <Search getSearch={(e) => setSearch(e)}/>
        <Countries
        countries={countries}
        addCountryToDreamDestinations={addCountryToDreamDestinations}
        />
      </Route>

      <Route exact path='/dream-destinations'>
        <Header />
        <DreamDestinations dreamDestination={dreamDestination}/>
      </Route>
      <Route exact path='/error'>
              <Error
                error={ error }
                />
        </Route>
    </Switch>
  )
}

export default App;
