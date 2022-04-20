import './Header.css';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import suitcase from './suitcase.png'

const Header = () => {
  return (
      <div className='header-wrapper'>
      <Link to='/dream-destinations'>
        <div>
          <button className='dream-destinations-button'><img src={suitcase} className='suitcase'/></button>
        </div>
      </Link>
        <div className='header'>
          <h1 className='header-title'>OH THE PLACES YOU'LL GO</h1>
        </div>
      </div>
  )
}

export default Header;
