import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ImagesSlider from './components/ImagesSlider'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const App = () => {
  const slides = []
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  }

  return (
    <Provider>
      <Header />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}
