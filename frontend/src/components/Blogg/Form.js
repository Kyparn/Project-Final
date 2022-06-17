import React, { useState } from 'react'
import { BLOGG_URL } from '../utils/API'

const Form = ({ blogg, setBlogg }) => {
  const [newBlogg, setNewBlogg] = useState('')
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
    <section className="blogg-container">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newBlogg">Skriv något kul!</label>
        <textarea
          className={counter < 6 || counter > 140 ? 'no-words' : 'word-counter'}
          type="text"
          rows="10"
          id="newBlogg"
          value={newBlogg}
          onChange={newBloggChange}
          placeholder="Skriv något kul här!"
        />
        <div className="blogg-container-lowerpart">
          <p> {140 - counter} /140</p>
          <button
            className="happy-button"
            type="submit"
            disabled={newBlogg.length < 2 || newBlogg.length > 140}
          >
            {''}
            {/* <span role="img" aria-label="beers">
              🍺{' '}
            </span> */}
            Buy me beer {''}
            {/* <span role="img" aria-label="beers">
              🍺{' '}
            </span> */}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form
