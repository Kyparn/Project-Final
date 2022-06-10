import React, { useState, useEffect } from 'react'

import Form from './Form'
import { BLOGG_URL, LIKES_URL } from '../utils/API'
import BloggCard from './BloggCard'

const Blogg = () => {
  const [blogg, setBlogg] = useState([])

  useEffect(() => {
    fetchBlogg()
  })

  const fetchBlogg = () => {
    fetch(BLOGG_URL)
      .then((res) => res.json())
      .then((data) => setBlogg(data))
  }

  const handleAddedLikes = (id) => {
    const options = {
      method: 'post',
    }
    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then(() => {
        fetchBlogg()
      })
  }

  return (
    <>
      <Form setBlogg={setBlogg} blogg={blogg} />
      {blogg.map((blogg) => (
        <BloggCard
          key={blogg._id}
          blogg={blogg}
          handleAddedLikes={handleAddedLikes}
        />
      ))}
    </>
  )
}
export default Blogg
