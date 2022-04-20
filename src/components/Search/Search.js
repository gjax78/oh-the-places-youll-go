import React, { useState } from 'react'
import './Search.css'

const Search = ({ getSearch }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
    getSearch(e.target.value)
  }

  return (
    <section className='search'>
      <form>
        <input
        type='text'
        className='controlled-search'
        placeholder='Search countries'
        value={text}
        onChange={(e) => onChange(e)}
        />
      </form>
    </section>
  )
}

export default Search
