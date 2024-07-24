import React from "react";
import logo from "../../assets/images/sekawan-removebg-preview.png"
import WA from "../../assets/images/wapth.png"
import { FaRegEnvelope, FaCaretRight, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <a aria-label="Chat on WhatsApp" href="https://wa.me/+6285259923085"><img src={WA} className="wa__logo"/></a>
            <div className="footer__grid container grid">
                <div className="footer__content">
                    <a href="/" className="footer__logo">
                        <img src={logo} alt="" className="footer__logo-img" />
                    </a>

                    <p className="footer__deskripsi">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>

                    <ul className="footer__content">
                        <li className="footer__content-item">
                            <LuPhone className="icon"/> 031-08350071
                        </li>
                        <li className="footer__content-item">
                            <FaRegEnvelope className="icon"/> infosekawan@gmail.com
                        </li>
                        <li className="footer__content-item">
                            <MdOutlineLocationOn className="icon"/> Jl. Konco Kentel No. 53, Sukabulan
                        </li>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14068.970268572602!2d112.68573622419935!3d-7.400353406221138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3a313fc5439%3A0x70a216c989baeef5!2sLapangan%20Sepakbola%20Kloposepuluh!5e0!3m2!1sen!2sid!4v1715646857276!5m2!1sen!2sid" width="300" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Quick Link</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#home" className="footer__link">
                            <FaCaretRight className="icon"/> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="footer__link">
                            <FaCaretRight className="icon"/>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#features" className="footer__link">
                            <FaCaretRight className="icon"/>Features
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#menu" className="footer__link">
                            <FaCaretRight className="icon"/>Menu
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#gallery" className="footer__link">
                            <FaCaretRight className="icon"/>Gallery
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#review" className="footer__link">
                            <FaCaretRight className="icon"/>Review
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Open Hours</h3>
                    <div className="footer__open">
                        <ul className="open__list">
                            <li className="open__item">
                                <span>Senin : </span>
                                <span>10.00 - 24.00 </span>
                            </li>
                            <li className="open__item">
                                <span>Selasa : </span>
                                <span>10.00 - 24.00 </span>
                            </li>
                            <li className="open__item">
                                <span>Rabu : </span>
                                <span>10.00 - 24.00 </span>
                            </li>
                            <li className="open__item">
                                <span>Kamis : </span>
                                <span>10.00 - 24.00 </span>
                            </li>
                            <li className="open__item">
                                <span>Jum'at : </span>
                                <span>10.00 - 24.00 </span>
                            </li>
                            <li className="open__item">
                                <span>Sabtu : </span>
                                <span>8.00 - 24.00 </span>
                            </li>
                            <li className="open__item">
                                <span>Minggu : </span>
                                <span>8.00 - 24.00 </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Review Me :</h3>
                    <div className="footer__review">
                        <form action="" className="review__form">
                            <div className="form__input-div">
                                <input type="text" placeholder="Your Name" className="form__input" />
                            </div>
                            <div className="form__input-div">
                                <input type="text" placeholder="Rating number" className="form__input" />
                            </div>
                            <div className="form__input-div">
                                <textarea placeholder="Kolom review" className="form__input"></textarea>
                            </div>
                        </form>
                        <button className="btn btn--flex review__btn">Kirim</button>
                    </div>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">Follow Us : </h3>
                    <div className="footer__follow">
                        <ul className="follow__list">
                            <li className="follow__item">
                            <a href="/" className="follow__link">
                            <FaYoutube className="icon follow__icon"/> SekawanKofi
                            </a>
                            </li>
                            <li className="follow__item">
                            <a href="/" className="follow__link">
                            <FaInstagram className="icon follow__icon"/> Sekawan_Kofi
                            </a>
                            </li>
                            <li className="follow__item">
                            <a href="/" className="follow__link">
                            <FaTiktok className="icon follow__icon"/> SekawanKofi.id
                            </a>
                            </li>
                            <li className="follow__item">
                            <a href="/" className="follow__link">
                            <FaXTwitter className="icon follow__icon"/> Sekawan Kofi
                            </a>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>

            <p className="copyright__teks">&copy; Copyright 2024 <span>SekawanKofi</span> All Rights Reserved</p>
        </footer>
    )
}

export default Footer
