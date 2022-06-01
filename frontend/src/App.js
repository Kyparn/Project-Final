import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'
import Blogg from './components/Blogg'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ImagesSlider from './components/ImagesSlider'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import user from './utils/reducer'

// const reducer = combineReducers({
//   user: user.reducer,
// })

// const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <Header />
      <Provider>
        <Main />
      </Provider>
    </>
  )
}
