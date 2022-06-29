import React, { useState, useEffect } from 'react'

import Form from './Form'
import { BLOGG_URL } from '../utils/API'
import BloggCard from './BloggCard'
import './blogg.css'

const Blogg = () => {
  const [blogg, setBlogg] = useState([])

  useEffect(() => {
    fetchBlogg()
  }, [blogg])
  const fetchBlogg = () => {
    fetch(BLOGG_URL)
      .then((res) => res.json())
      .then((data) => {
        setBlogg(data)
      })
  }

  return (
    <section className="main-blogg-container">
      <Form setBlogg={setBlogg} blogg={blogg} />
      {blogg.map((blogg) => (
        <BloggCard key={blogg._id} blogg={blogg} />
      ))}
    </section>
  )
}
export default Blogg
