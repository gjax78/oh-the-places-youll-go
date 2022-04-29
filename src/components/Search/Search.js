import React, { useState } from 'react'
import './Search.css'
import PropTypes from 'prop-types'

const Search = ({ search, setSearch }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form className='form-search'>
      <input
      type='text'
      className='controlled-search'
      placeholder='Search destinations'
      value={search}
      onChange={onChange}
      />
    </form>
  )
}

export default Search;

Search.propTypes = {
  getSearch: PropTypes.func
}

//avoid derivitive state
