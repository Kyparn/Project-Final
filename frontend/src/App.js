import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Main from 'components/Main'
import Login from 'components/pages/Login'
import Blogg from 'components/pages/Blogg'
import BidaNok from 'components/pages/BidaNok'
import Phiphi from 'components/pages/Phiphi'
import HinDaeng from 'components/pages/HinDaeng'
import KingCruiser from 'components/pages/KingCruiser'
import Kohhaa from 'components/pages/Kohhaa'
import Footer from 'components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/bidanok" element={<BidaNok />}></Route>
        <Route path="/blogg" element={<Blogg />}></Route>
        <Route path="phiphi" element={<Phiphi />}></Route>
        <Route path="hindaeng" element={<HinDaeng />}></Route>
        <Route path="kingcruiser" element={<KingCruiser />}></Route>
        <Route path="kohhaa" element={<Kohhaa />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
