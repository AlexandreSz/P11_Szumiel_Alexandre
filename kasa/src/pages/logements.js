import React from 'react'
import { useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'
import Error from './Error'
import Tag from '../components/Tag'
import Footer from '../components/Footer'

const Logements = ({ data }) => {
  const { id } = useParams()
  const dataDetails = data.find((item) => item.id === id)
  if (!dataDetails) {
    return <Error />
  }
  const {
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = dataDetails
  return (
    <main>
      <div>
        <Navigation />
      </div>
      {/* Slider */}
      <Slider />
      {/* Intro logement */}
      <div id="logement-intro">
        <div>
          <h1 id="intro-title">{title}</h1>
          <h2 id="intro-location">{location}</h2>
          <Tag tags={tags} />
        </div>
        {/* host + notation */}
      </div>
      <div id="logement-info">
        <Dropdown title="Description" content={description} />
        <Dropdown title="Equipements" content={equipments} />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  )
}

export default Logements
