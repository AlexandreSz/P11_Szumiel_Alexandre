import React from 'react'
import BannerImg from '../assets/images/IMGbanner.svg'

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={BannerImg} alt="" />
      <div id="bg"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
