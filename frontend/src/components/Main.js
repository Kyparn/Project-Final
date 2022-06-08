import React from 'react'
import video from '../img/video.mp4'

const Main = () => {
  return (
    <div className="main">
      <div className="overlay">
        <video src={video} autoPlay loop muted />
        <div className="content">
          <p>Hej hej Simon</p>
        </div>
      </div>
    </div>
  )
}
export default Main
