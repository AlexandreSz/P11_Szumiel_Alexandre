import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import homeImg from '../assets/images/IMGbanner.png'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner img={homeImg} text={'Chez vous, partout et ailleurs'} />
      <div className="card-section">
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default Home
