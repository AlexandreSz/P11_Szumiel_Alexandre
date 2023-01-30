import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, title, cover }) => {
  return (
    <div className="card">
      <Link to={`/logement/${id}`}>
        <img id={id} src={cover} alt={title} />
      </Link>
      <div className="card-content">
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Card
