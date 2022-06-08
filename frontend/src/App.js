import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Main from 'components/Main'
// import Login from 'components/pages/Login'
// import Blogg from 'components/pages/Blogg'
import DiveDetails from 'components/pages/DiveDetails'
import Footer from 'components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* <Route path="/login" element={<login />}></Route>
        <Route path="/blogg" element={<Blogg />}></Route> */}
        <Route path="/:slug" element={<DiveDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
