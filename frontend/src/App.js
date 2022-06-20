import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'components/Navbar/Navbar'
import Main from 'components/Main'
import Blogg from 'components/Blogg/Blogg'
import Login from 'components/Pages/Login'
import DiveDetails from 'components/Pages/DiveDetails'
import Footer from 'components/Footer'
import NotFound from 'components/Pages/NotFound'

import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import user from './components/utils/reducer'

const reducer = combineReducers({
  user: user.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/blogg" element={<Blogg />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:slug" element={<DiveDetails />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
