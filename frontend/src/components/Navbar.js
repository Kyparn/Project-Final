import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Navbar = () => {
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState([])
  const [dives, setDives] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://final-project-simon.herokuapp.com/myData`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data) {
          setDives(data)
        } else {
          setHasError(true)
        }
      })
    // hämta dives
    // setDives(response)
  }, [])
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <p className="title"> 🦈</p>
      </Link>
      <ul>
        {dives.map((dive) => (
          <li>
            <Link to={dive.slug}>{dive.name}</Link>
          </li>
        ))}
        <li>
          <Link to="/blogg">Blogg</Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </nav>
  )
}
export default Navbar
