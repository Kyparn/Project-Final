import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Backicon } from '../Backicon'

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
          setDive(data.response)
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
      <Link to="/" className="backLink">
        <Backicon /> Back to main
      </Link>
      <div className="info">
        <h2 className="infoName">{dive.name}</h2>
        <h2 className="infoSite">{dive.info}</h2>
        <h2 className="infoLevel">{dive.level}</h2>
        <h2 className="infoLife">{dive.marineLife}</h2>
        <img className="images" src={dive.img} width="450px" />
        <h2>{}</h2>
      </div>
    </div>
  )
}
export default DiveDetails
