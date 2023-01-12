import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Erreur from './pages/Error'
import Home from './pages/Home'
import Logements from './pages/Logements'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
