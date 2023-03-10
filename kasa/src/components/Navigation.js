import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/LOGO.png'

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/">
        <img src={Logo} alt="kasa-logo" />
      </NavLink>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation
