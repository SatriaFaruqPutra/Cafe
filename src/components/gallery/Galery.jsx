import React from "react";
import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';
import gallery4 from '../../assets/images/gallery-4.jpg';
import gallery5 from '../../assets/images/gallery-5.jpg';
// import { IoAddOutline } from "react-icons/io5";
import "./Galery.css"
 

const Galery = () => {
    return (
        <section className="galery section" id="galery">
            <h2 className="section__title" data-title="Gallery">Our Photo Gallery</h2>
            <div className="galery__grid container grid">
                <div className="galery__item">
                    <img src={gallery1} alt="" className="galery__img" />
                    <h3 className="galery__title">Cappucino</h3>
                </div>
                <div className="galery__item">
                    <img src={gallery2} alt="" className="galery__img" />
                    <h3 className="galery__title">Cappucino</h3>
                </div>
                <div className="galery__item">
                    <img src={gallery3} alt="" className="galery__img" />
                    <h3 className="galery__title">Cappucino</h3>
                </div>
                <div className="galery__item">
                    <img src={gallery4} alt="" className="galery__img" />
                    <h3 className="galery__title">Cappucino</h3>
                </div>
                <div className="galery__item">
                    <img src={gallery5} alt="" className="galery__img" />
                    <h3 className="galery__title">Cappucino</h3>
                </div>
                <div className="galery__item">
                    <img src={gallery5} alt="" className="galery__img" />
                    <h3 className="galery__title">Cappucino</h3>
                </div>
            </div>
        </section>
    )
}

export default Galery