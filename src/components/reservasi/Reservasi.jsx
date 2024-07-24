import React from "react";
import shapeTow from "../../assets/images/shape-2.png";
import shapeThree from "../../assets/images/shape-3.png";
import "./Reservasi.css";

const Reservasi = () => { 
    return (
        <section className="reservasi container" id="reservasi">
            <h2 className="section__title" data-title="Reservasi">Book A Table</h2>

            <form action="" className="reservasi__form grid">
                <div className="form__input-div">
                    <input type="text" placeholder="Your Name" className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="email" placeholder="Your E-mail" className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text" placeholder="Your Phone Number" className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text" placeholder="Date Ex: DD/MM/YY" className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text" placeholder="Time Ex: 18.00" className="form__input" />
                </div>
                <div className="form__input-div">
                    <input type="text" placeholder="Many People" className="form__input" />
                </div>
                <div className="form__input-div form__input-textarea">
                    <textarea placeholder="Your Mesagge" className="form__input"></textarea>
                </div>
                <button className="btn btn--flex reservasi__btn">Reservasi</button>
            </form>

            <img src={shapeTow} alt="" className="shape__two"/>
            <img src={shapeThree} alt="" className="shape__three"/>
        </section>
    )
}

export default Reservasi