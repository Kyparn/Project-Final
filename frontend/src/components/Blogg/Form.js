import React, { useState } from 'react'
import { API_URL } from '../utils/API'

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
    fetch(API_URL, options)
      .then((response) => response.json)
      .then((data) => setBlogg([data, ...blogg]))

    setNewBlogg('')
    setCounter(0)
  }

  return (
    <>
      <section className="main-container">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="newBlogg"> Write a blogg post</label>
          <textarea
            className={
              counter < 6 || counter > 140 ? 'no-words' : 'word-counter'
            }
            type="text"
            rows="5"
            id="newBlogg"
            value={newBlogg}
            onChange={newBloggChange}
            placeholder="Write a happy thought"
          />
          <div className="main-container-lowerpart">
            <p> {140 - counter} / 140 characters left</p>
            <button
              className="happy-button"
              type="submit"
              disabled={newBlogg.length < 6 || newBlogg.length > 140}
            >
              {' '}
              <span role="img" aria-label="hearts">
                ❤️
              </span>{' '}
              Like{' '}
              <span role="img" aria-label="hearts">
                ❤️
              </span>{' '}
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Form
