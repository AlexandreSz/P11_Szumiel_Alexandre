import React from 'react'
import Navigation from '../components/Navigation'
import BannerDesktop from '../assets/images/ImgBannerAbout.png'
import BannerMobile from '../assets/images/gustavo-alves-YOXSC4zRcxw-unsplash 1mobileAbout.png'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navigation />
      {/* Banner */}
      <div id="title">
        <img
          id="title-banner-desktop"
          src={BannerDesktop}
          alt="Bannière avec un paysage"
        />
        <img
          id="title-banner-mobile"
          src={BannerMobile}
          alt="Bannière avec un paysage"
        />
        <div id="title-bg"></div>
      </div>

      <section className="section_dropdowns">
        <Dropdown
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </section>
      <Footer />
    </div>
  )
}

export default About
