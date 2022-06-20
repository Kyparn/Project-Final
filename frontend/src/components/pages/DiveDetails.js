import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Backicon } from '../Backicon'
import Slider from '../Slider/Slider'
import { SliderData } from '../Slider/SliderData'

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
  }, [slug])
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <section className="main-container">
      <div className="upperinfo">
        <h2 className="infoName">
          Dive site {''}
          {dive.name}
        </h2>
        <p className="infoLevel">
          Experience {''}
          {dive.level}
        </p>
        <p className="infoSite">
          {dive.info} and the deapth is between {dive.deapth}
        </p>
      </div>
      <div className="lowerinfo">
        <p> Everyday animal life on this location </p>
        <p className="infoLife">{dive.marineLife}</p>
        <Slider slides={SliderData} />
        <Link to="/" className="backLink">
          <Backicon /> Back to main
        </Link>
      </div>
    </section>
  )
}
export default DiveDetails
