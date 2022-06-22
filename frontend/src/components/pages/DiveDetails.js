import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Backicon } from '../Backicon'
import Slider from '../Slider/Slider'

const DiveDetails = () => {
  const { slug } = useParams()
  const [dive, setDive] = useState()
  const [hasError, setHasError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [imges, setImges] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`https://final-project-simon.herokuapp.com/myData/dive/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data)

          setImges([])

          setDive(data.response)
          data.response.img.map((singleimge) => {
            setImges((oldImgs) => [...oldImgs, { image: singleimge }])
          })
        } else {
          setHasError(true)
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setLoading(false))
  }, [slug])
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <section className="main-container">
      <wrapper className="inner-container">
        <div className="upperinfo">
          <h2 className="info">
            Dive site {''}
            {dive.name}
          </h2>
          <h3 className="info">
            Experience {''}
            {dive.level}
          </h3>
          <p className="infoSite">{dive.info1}</p>
          <p className="infoSite">{dive.info2}</p>
          <p className="infoSite">{dive.info3}</p>
          <p className="infoSite">Depth is between{dive.deapth}</p>
          <p className="infoSite">
            On an average day the visibility is between {dive.visibility}
          </p>
        </div>
        <div className="lowerinfo">
          <h3 className="info"> Everyday animal life on this location </h3>
          <p className="infoLife">{dive.marineLife}</p>
          <Slider slides={imges} />
          <Link to="/" className="backLink">
            <Backicon /> Back to main
          </Link>
        </div>
      </wrapper>
    </section>
  )
}
export default DiveDetails
