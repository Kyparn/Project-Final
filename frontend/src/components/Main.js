import React from 'react'
import video from '../img/video.mp4'

const Main = () => {
  return (
    <div className="main-container-video">
      <video src={video} autoPlay loop muted />
    </div>
  )
}
export default Main
