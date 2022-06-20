import React from 'react'
import Github from '../img/Github.png'
import Stack from '../img/Stack.png'
import Linkedin from '../img/Linkedin.png'

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">Made by Simon Student @ Technigo</p>
      <div className="more-links">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/simon-andersson-7b4466204/"
            target="_blank"
          >
            <img src={Linkedin} alt="linkedin-icon" className="links" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Kyparn" target="_blank">
            <img src={Github} alt="Github-icon" className="links" />
          </a>
        </div>
        <div>
          <a
            href="https://stackoverflow.com/users/17890306/simon"
            target="_blank"
          >
            <img src={Stack} alt="Stackowerflow" className="links" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
