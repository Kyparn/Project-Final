import React, { useState, useEffect } from 'react'

import Form from './Form'
import { BLOGG_URL, LIKES_URL } from '../utils/API'
import BloggCard from './BloggCard'
import './blogg.css'

const Blogg = () => {
  const [blogg, setBlogg] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchBlogg()
  }, [])
  const fetchBlogg = () => {
    fetch(BLOGG_URL)
      .then((res) => res.json())
      .then((data) => {
        setBlogg(data)
        setLoading(false)
      })
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
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <Form setBlogg={setBlogg} blogg={blogg} />
      {blogg.map((blogg) => (
        <div key={blogg._id}>
          {' '}
          <BloggCard blogg={blogg} handleAddedLikes={handleAddedLikes} />
        </div>
      ))}
    </>
  )
}
export default Blogg
