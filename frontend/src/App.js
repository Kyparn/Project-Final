import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Blogg from './components/Blogg'
import Footer from './components/Footer'

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import user from './utils/reducer'

// const reducer = combineReducers({
//   user: user.reducer,
// })

// const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  )
}
