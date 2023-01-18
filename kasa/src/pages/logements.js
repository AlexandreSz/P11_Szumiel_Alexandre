import React from 'react'
import { useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'
import Error from './Error'

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
    <div>
      <Navigation />
      <Slider />
      <Dropdown title="Equipements" content={equipments} />
      <Dropdown title="Description" content={description} />
    </div>
  )
}

export default Logements
