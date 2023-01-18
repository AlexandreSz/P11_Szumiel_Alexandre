import React, { useState } from 'react'
import data from '../data/data.json'
import arrowLeft from '../assets/images/left_arrow.png'
import arrowRight from '../assets/images/rigth_arrow.png'
import { useParams } from 'react-router-dom'

const Slider = () => {
  const { id } = useParams()
  const dataPictures = data.find((item) => item.id === id)
  const { pictures } = dataPictures

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1)
  }

  return (
    <section id="slider">
      {/* Showing slider navigation buttons */}
      {pictures.length > 1 && (
        <img
          src={arrowLeft}
          alt="imgprec"
          className="prevImage"
          onClick={prevSlide}
        ></img>
      )}
      {pictures.length > 1 && (
        <img
          src={arrowRight}
          alt="imgnext"
          className="nextImage"
          onClick={nextSlide}
        ></img>
      )}

      {/* Images */}
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {index === current && (
              <span className="slider-image-number">
                {current + 1}/{pictures.length}
              </span>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Slider
