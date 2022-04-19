import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <h1>Oh the places you'll go!</h1>
      <Route>
    </Switch>
  )
}

export default App;
