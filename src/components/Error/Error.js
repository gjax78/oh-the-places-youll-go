import React from 'react'
import './Error.css'

const Error = ({ error }) => {
  return (
    <div className='error-container'>
      <p>Flight delayed... Please check back later.</p>
    </div>
  )
}

export default Error;
