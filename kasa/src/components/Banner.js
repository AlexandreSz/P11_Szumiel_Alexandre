import React from 'react'

const Banner = ({ text, img }) => {
  return (
    <div className="banner-container">
      <img src={img} alt="" className="banner-Img" />
      <div id="bg"></div>
      <h1>{text}</h1>
    </div>
  )
}

export default Banner
