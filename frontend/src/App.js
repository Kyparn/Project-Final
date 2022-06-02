import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
// import Blogg from './components/pages/Blogg'
// import BidaNok from './components/pages/BidaNok'
// import Phiphi from '.components/pages/Phiphi'
// import HinDaeng from '.components/pages/HinDaeng'
// import KingCruiser from '.components/pages/KingCruiser'
// import Kohhaa from '.components/pages/Kohhaa'

import Footer from './components/Footer'

import { configureStore, combineReducers } from '@reduxjs/toolkit'

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
