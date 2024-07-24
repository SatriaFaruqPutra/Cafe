import React from 'react';
import './App.css';
import Beranda from './components/Beranda'
import Aboutpage from './components/aboutpage'
import Galerypages from './components/galerypage'
import Promopage from './components/promopage'
import Reservasipage from './components/reservasipage'
import Reviewpage from './components/reviewpage'
import Menupages from './components/menupages/menupage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/menu" element={<Menupages />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/galery" element={<Galerypages />} />
        <Route path="/promo" element={<Promopage />} />
        <Route path="/reservasi" element={<Reservasipage />} />
        <Route path="/review" element={<Reviewpage />} />
      </Routes>
    </Router>
  );
}


export default App;
