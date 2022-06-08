import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Navbar = () => {
  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [dives, setDives] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://final-project-simon.herokuapp.com/myData/dive/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    // hämta dives
    // setDives(response)
  }, [])
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <p>My bubbels 🐟 </p>
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
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
