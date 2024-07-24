import React from 'react';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Menu from './menu/Menu';
import Galery from './gallery/Galery';
import Offer from './offer/Offer';
import Reservasi from './reservasi/Reservasi';
import Testimoni from './testimoni/Testimoni';
import Footer from './footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function Beranda() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Menu />
      <Offer />
      <Galery />
      <Reservasi />
      <Testimoni />
      <Footer /> 
      </>
  );
}

export default Beranda;
