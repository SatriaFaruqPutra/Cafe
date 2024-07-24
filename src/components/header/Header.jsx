import React, { useEffect, useState } from "react";
import logo from "../../assets/images/sekawan-removebg.png"
import map from "../../assets/images/location.jpg"
import {animateScroll } from "react-scroll";
import { Link, useMatch } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  // const [url,path] = useMatch();

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  }
 
  useEffect(() => {
    window.addEventListener('scroll', changeHeader)
  }, []);

    return (
        <header className={`${scrollHeader ? 'scroll-header' : ''}
        header`}>
        <nav className='nav container'>
          <Link to='/' onClick={scrollTop} className='nav__logo'>
            <img src={logo} alt='' className='nav__logo-img'></img>
          </Link>
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item "> 
                <Link to='/' className="nav__links">Home</Link>
              </li>
              <li className="nav__item "> 
                <Link to='/about' className="nav__links">About</Link>
              </li>
              <li className="nav__item "> 
                <Link to='/menu' className="nav__links">Menu</Link>
              </li>
              <li className="nav__item "> 
                <Link to='/promo' className="nav__links">Promo</Link>
              </li>
              <li className="nav__item "> 
                <Link to='/galery' className="nav__links">Gallery</Link>
              </li>
              <li className="nav__item "> 
                <Link to='/reservasi' className="nav__links">Reservasi</Link>
              </li>
              <li className="nav__item "> 
                <Link to='/review' className="nav__links">Review</Link>
              </li>
            </ul>
          </div>

          <div className="nav__location">
             <p> 
                Jl. Konco Kentel No. 53 
              </p>
              <p className="location1"> 
                Ketumbar, Pisangan, Hiubajol
              </p>
          </div>
          <div>
            <a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14068.970268572602!2d112.68573622419935!3d-7.400353406221138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3a313fc5439%3A0x70a216c989baeef5!2sLapangan%20Sepakbola%20Kloposepuluh!5e0!3m2!1sen!2sid!4v1715646857276!5m2!1sen!2sid"><img src={map} className="nav__img-map" /></a>
          </div>
          
          <div className="nav__seacrh-box" id="testsearch">
            <input type="search" name="" id="searchbox"  placeholder="Seacrh Here...."/>
          </div>
        </nav>
      </header>
    )
}

export default Header;