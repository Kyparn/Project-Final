import React from 'react'
import video from '../img/video.mp4'
// import styled from 'styled-components/macro'

// const Video = styled.div`
//   width: 100%;
//   height: 100vh;
// `

const Main = () => {
  return (
    <div className="main">
      <div className="overlay">
        <video src={video} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div>
      </div>
    </div>
  )
}
export default Main