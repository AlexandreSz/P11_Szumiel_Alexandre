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
  const rate = [1, 2, 3, 4, 5]
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
        <div id="loge-title">
          <h1 id="intro-title">{title}</h1>
          <h2 id="intro-location">{location}</h2>
          <Tag tags={tags} />
        </div>
        {/* host + notation */}
        <div className="info">
          <div id="host-info">
            <img id="host-info-picture" src={host.picture} alt={host.name} />
            <p id="host-info-name">{host.name}</p>
          </div>
          <div id="host-stars">
            {rate.map((rateElem) =>
              rating >= rateElem ? (
                <svg
                  key={rateElem.toString()}
                  className="star"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="star-red"
                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  />
                </svg>
              ) : (
                <svg
                  key={rateElem.toString()}
                  className="star"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="star-grey"
                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  />
                </svg>
              ),
            )}
          </div>
        </div>
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
