import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Backicon } from '../Backicon'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
// import Slider from '../Slider/Slider'
// import { SliderData } from '../Slider/SliderData'

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
          setDive(data.response)
        } else {
          setHasError(true)
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setLoading(false))
  }, [slug])

  const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
      console.log(nextSlide)
    }

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null
      console.log(slides)
    }

    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slug.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.dive.img}
                  alt="travel image"
                  className="image"
                />
              )}
            </div>
          )
        })}
      </section>
    )
  }

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
        <Slider slides={dive.img} />
        <Link to="/" className="backLink">
          <Backicon /> Back to main
        </Link>
      </div>
    </section>
  )
}
export default DiveDetails
