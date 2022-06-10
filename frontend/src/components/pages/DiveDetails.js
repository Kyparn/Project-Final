import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const DiveDetails = () => {
  const { slug } = useParams()
  const [dive, setDive] = useState()
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`https://final-project-simon.herokuapp.com/myData/dive/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data)
          setDive(data)
        } else {
          setHasError(true)
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setLoading(false))
    // hämta dive med slug dvs API-adressen + /${}
    // setDives(response)
  }, [slug])
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className="main-container">
      <Link to="/" className="back-link">
        <span className="movie-icon">Back</span>
      </Link>
      <div className="info">
        <h2>{dive.level}</h2>
        <h2>{}</h2>
        <h2>{}</h2>
        <h2>{}</h2>
        <h2>{}</h2>
      </div>
    </div>
  )
}
export default DiveDetails
