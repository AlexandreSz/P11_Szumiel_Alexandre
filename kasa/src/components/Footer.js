import React from 'react'
import HomeIcons from '../assets/iconesfooter/Vectorhomefoot.png'
import Door from '../assets/iconesfooter/Vectorporte.png'
import K from '../assets/iconesfooter/VectorKfoot.png'
import S from '../assets/iconesfooter/Vectorsfoot.png'
import A from '../assets/iconesfooter/Vectorafoot.png'
import Droits from '../assets/iconesfooter/© 2020 Kasa. All rights reservedtexte.png'

const Footer = () => {
  return (
    <footer>
      <div className="logo-banner ">
        <img src={K} alt="k" />
        <img src={HomeIcons} alt="home" />
        <img className="door" src={Door} alt="door" />
        <img src={S} alt="S" />
        <img src={A} alt="a" />
      </div>
      <div className="footer-info">
        <img src={Droits} alt="droits" />
      </div>
    </footer>
  )
}

export default Footer
