import React from 'react'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

export const App = () => {
  return (
    <Provider>
      <Header />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< />} />
          <Route path="/" element={< />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}
