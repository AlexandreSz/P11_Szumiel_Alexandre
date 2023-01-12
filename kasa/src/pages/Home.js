import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className="card-section">
        <Card />
      </div>
      <Footer />
    </div>
  )
}

export default Home
