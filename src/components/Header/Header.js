import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import suitcase from './suitcase.png'
import home from './home.png'

const Header = () => {
  return (
    <div className='header-wrapper'>
    <Link to='/dream-destinations'>
      <div>
        <button className='dream-destinations-button' aria-label="dream-destinations">DREAM DESTINATIONS</button>
      </div>
    </Link>
    <Link to='/'>
      <div>
        <button className='home-button' aria-label="home">HOME<img src={home} className='home' alt='home-button'/></button>
      </div>
    </Link>
      <div className='header'>
        <h1 className='header-title'>OH THE PLACES YOU'LL GO</h1>
      </div>
    </div>
  )
}

export default Header;
