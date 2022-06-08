import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DiveDetails = () => {
  const { slug } = useParams()
  const [dive, setDive] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`https://final-project-simon.herokuapp.com/myData/dive/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setDive(data)
      })
    // hämta dive med slug dvs API-adressen + /${}
    // setDives(response)
  }, [])
  return (
    <div className="main-container">
      <p></p>
    </div>
  )
}
export default DiveDetails
