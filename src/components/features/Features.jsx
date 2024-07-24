import React from "react";
import certified from '../../assets/images/certified.svg';
import coffeeBeans from '../../assets/images/coffee-beans.svg';
import coffee from '../../assets/images/coffee.svg';
import freeDelivery from "../../assets/images/free-delivery.svg";
import shape from "../../assets/images/shape.png";
import "./Features.css" 

const Features = () => {
    return (
        <section className="features section" id="features">
           <h2 className="section__title" data-title="Features">Best Features</h2>
           <div className="features__grid container grid">
                <div className="features__item">
                    <img src={freeDelivery} alt="" className="feature__img" />
                    <h3 className="feature__title">Aestetic Place</h3>
                    <p className="feature__descrption">It is a long established fact that a reader will be by the readable content of a page looking at its layout.</p>
                    <img src={shape} alt="" className="feature__shape" />
                </div>
                <div className="features__item">
                    <img src={certified} alt="" className="feature__img" />
                    <h3 className="feature__title">Organic Certified</h3>
                    <p className="feature__descrption">It is a long established fact that a reader will be by the readable content of a page looking at its layout.</p>
                    <img src={shape} alt="" className="feature__shape" />
                </div>
                <div className="features__item">
                    <img src={coffee} alt="" className="feature__img" />
                    <h3 className="feature__title">High Quality</h3>
                    <p className="feature__descrption">It is a long established fact that a reader will be by the readable content of a page looking at its layout.</p>
                    <img src={shape} alt="" className="feature__shape" />
                </div>
                <div className="features__item">
                    <img src={coffeeBeans} alt="" className="feature__img" />
                    <h3 className="feature__title">Proper Roasting</h3>
                    <p className="feature__descrption">It is a long established fact that a reader will be by the readable content of a page looking at its layout.</p>
                    <img src={shape} alt="" className="feature__shape" />
                </div>
                
            </div>
        </section>
    )
}

export default Features