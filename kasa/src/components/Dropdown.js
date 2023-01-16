import React from 'react'
import arrowDown from '../assets/images/Vectordown.png'
import arrowUp from '../assets/images/Vector.png'
import { useState } from 'react'

const Dropdown = ({ title, text, extraClass }) => {
  const [dropdownOpened, setDropdown] = useState(false)

  return dropdownOpened ? (
    <div className={extraClass ? 'dropdown' + extraClass : 'dropdown'}>
      <div className="dropdown_header">
        <h3>{title}</h3>
        <img
          src={arrowUp}
          alt="Cacher contenu"
          onClick={() => setDropdown(false)}
        />
      </div>
      {typeof text === 'object' ? convertArray(text) : <p>{text}</p>}
    </div>
  ) : (
    <div className="dropdown">
      <div className="dropdown_header">
        <h3>{title}</h3>
        <img
          src={arrowDown}
          alt="Afficher contenu"
          onClick={() => setDropdown(true)}
        />
      </div>
    </div>
  )
}
function convertArray(arr) {
  return (
    <ul>
      {arr.map((equipment) => (
        <li>{equipment}</li>
      ))}
    </ul>
  )
}

export default Dropdown
