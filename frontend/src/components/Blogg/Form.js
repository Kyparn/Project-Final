import React, { useState } from 'react'
import { BLOGG_URL } from '../utils/API'

import './blogg.css'

const Form = ({ blogg, setBlogg }) => {
  const [newBlogg, setNewBlogg] = useState([])
  const [counter, setCounter] = useState(0)

  const newBloggChange = (e) => {
    setNewBlogg(e.target.value)
    setCounter(e.target.value.length)
  }
  const onFormSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newBlogg }),
    }
    fetch(BLOGG_URL, options)
      .then((res) => res.json())
      .then((data) => setBlogg([data, ...blogg]))

    setNewBlogg('')
    setCounter(0)
  }
  return (
    <section className="inner-container">
      <form onSubmit={onFormSubmit}>
        <textarea
          className={counter < 6 || counter > 140 ? 'no-words' : 'word-counter'}
          type="text"
          rows="10"
          id="newBlogg"
          value={newBlogg}
          onChange={newBloggChange}
          placeholder="Skriv något kul här!"
        />
        <button
          className="happy-button"
          type="submit"
          disabled={newBlogg.length < 2 || newBlogg.length > 250}
        >
          {''}
          <span role="img" aria-label="sharks">
            🦈{' '}
          </span>{' '}
          Send {''}
          <span role="img" aria-label="sharks">
            🦈{' '}
          </span>
        </button>
      </form>
    </section>
  )
}
export default Form
