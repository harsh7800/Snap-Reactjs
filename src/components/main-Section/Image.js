import React from 'react'
import './Image.scss'
import DesktopImg from "../images/image-hero-desktop.png";
import MobileImg from "../images/image-hero-mobile.png";

function Image() {
  return (
    <div className="content-img">
          <img id='desktop-img' src={DesktopImg} alt="" />
          <img id='mobile-img' src={MobileImg} alt="" />
    </div>
  )
}

export default Image