import React from 'react'
import Navigation from '../components/Navigation'
import BannerDesktop from '../assets/images/IMGbanner.png'
import BannerMobile from '../assets/images/IMGmobilebannerHome.png'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navigation />
      {/* Banner */}
      <div id="titleH">
        <img
          id="titleH-banner-desktop"
          src={BannerDesktop}
          alt="Bannière avec un paysage"
        />
        <img
          id="titleH-banner-mobile"
          src={BannerMobile}
          alt="Bannière avec un paysage"
        />
        <div id="titleH-bg"></div>
        <h1 id="titleH-home">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="card-section">
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default Home
