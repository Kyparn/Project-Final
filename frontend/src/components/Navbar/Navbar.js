import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './nav.css'

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
  const accessToken = useSelector((store) => store.user.accessToken)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }, [accessToken])

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <p className="title">Diving the Andaman Sea</p>
      </Link>
      <hr className="horizontal-line" />
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
            <Link to="/login">
              Blogg {''}/ {''}
            </Link>
            <Link
              onClick={() => {
                navigate('/')
                dispatch(user.actions.setAccessToken(null))
              }}
              to="/"
            >
              {' '}
              Logga ut
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
