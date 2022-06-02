import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <p>My bubbels 🐟 </p>
      </Link>
      <ul>
        <li>
          <Link to="/phi Phi">Phi Phi</Link>
        </li>
        <li>
          <Link to="/koh Haa">Koh Haa</Link>
        </li>
        <li>
          <Link to="/bida Nok">Bida Nok</Link>
        </li>
        <li>
          <Link to="/hin Daeng">Hin Daeng</Link>
        </li>
        <li>
          <Link to="/king Cruiser">King Cruiser</Link>
        </li>
        <li>
          <Link to="/blogg">Blogg</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
