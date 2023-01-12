import React from 'react'
import data from '../data/data.json'
import { Link } from 'react-router-dom'

const Card = () => {
  return data.map((item) => (
    <div className="card" key={item.id}>
      <Link to={'./logement?_id=' + item.id}>
        <img id={item.id} src={item.cover} alt={item.title} />
      </Link>

      <div className="card-content">
        <h3>{item.title}</h3>
      </div>
    </div>
  ))
}

export default Card
