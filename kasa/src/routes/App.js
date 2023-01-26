import React from 'react'
import data from '../data/data.json'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Erreur from '../pages/Error'
import Home from '../pages/Home'
import Logement from '../pages/Logements'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement data={data} />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
