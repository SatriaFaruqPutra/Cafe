import React from "react";
import menu1 from '../../assets/images/01.jpg';
import menu2 from '../../assets/images/02.jpg';
import menu3 from '../../assets/images/03.jpg';
import menu4 from '../../assets/images/04.jpg'; 
import menu5 from '../../assets/images/05.jpg';
import menu6 from '../../assets/images/06.jpg';
import menu7 from '../../assets/images/07.jpg';
import menu8 from '../../assets/images/08.jpg';
import { Link } from 'react-router-dom';
import Menupages from '../menupages/menupage';
// import { CiCirclePlus } from "react-icons/ci";
import "./Menu.css"; 

const Menu = () => {
    return (
        <section className="menu section" id="menu">
            <h2 className="section__title" data-title="Our Menu">Let's Check Our Menu</h2>

            <div className="menu__grid container grid">

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu2} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano </h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                     
                    </div>

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu3} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano</h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                     
                    </div>

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu4} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano</h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                     
                    </div>

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu5} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano</h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                     
                    </div>

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu6} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano</h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                     
                    </div>

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu7} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano</h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                     
                    </div>

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu8} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano</h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                    </div>

                    <div className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={menu1} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h3 className="menu__title">Americano</h3>
                            <p className="menu__description">Satu shoot americano dengan es batu</p>
                            <span className="menu__price">Rp12.000</span>
                        </div>
                    </div>

                </div>
                    <Link to='/menu'>
                        <p className="menu__links">Menu Lainnya</p>
                    </Link>
                

        </section>
    )
}

export default Menu