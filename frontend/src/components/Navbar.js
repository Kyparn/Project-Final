import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState([])
  const [dives, setDives] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://final-project-simon.herokuapp.com/myData`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDives(data)
        } else {
          setHasError(true)
        }
      })
  }, [])
  const handleClick = () => {
    setClick(!click)
  }
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <p className="title">🦈</p>
      </Link>
      <li className="toggle-button" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </li>
      <div className={click ? 'nav-links' : 'nav-links close'}>
        <ul>
          {dives.map((dive) => (
            <li key={dive.name}>
              <Link to={dive.slug}>{dive.name}</Link>
            </li>
          ))}
          <li>
            <Link to="/blogg">Blogg</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
