import React from 'react'

import { useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import Navigation from '../components/Navigation'
import Slider from '../components/Slider'

const Logements = ({ data }) => {
  const { id } = useParams()
  const items = data.filter((item) => item.id === id)
  return (
    <div>
      <Navigation />
      <Slider />
    </div>
  )
}

export default Logements
