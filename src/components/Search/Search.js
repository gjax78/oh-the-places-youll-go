import React, { useState } from 'react'
import './Search.css'

const Search = ({ getSearch }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
    getSearch(e.target.value)
  }

  return (
      <form className='form-search'>
        <input
        type='text'
        className='controlled-search'
        placeholder='Search destinations'
        value={text}
        onChange={(e) => onChange(e)}
        />
      </form>
  )
}

export default Search
