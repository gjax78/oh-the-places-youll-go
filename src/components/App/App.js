import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Countries from '../Countries/Countries'
import DreamDestinations from '../DreamDestinations/DreamDestinations'

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Header />
        <Countries />
      </Route>

      <Route exact path='/dream-destinations'>
        <DreamDestinations />
      </Route>
    </Switch>
  )
}

export default App;
