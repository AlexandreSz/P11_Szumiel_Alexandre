import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

const Erreur = () => {
  return (
    <div>
      <Navigation />
      <section className="page404Section">
        <h7>404</h7>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="backHomeLink">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </div>
  )
}

export default Erreur
