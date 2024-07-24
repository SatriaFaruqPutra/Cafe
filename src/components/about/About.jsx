import React from "react";
import aboutImg from "../../assets/images/about-img.jpg";
import { MdDoubleArrow } from "react-icons/md";
import "./About.css"; 
import Header from "../header/Header";
import Footer from "../footer/footer";

const About = () => {
    return (
        <section className="aboutsection" id="about">
            <div className="about__grid container grid"> 
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="" className="about__img" />
                </div>
                <div className="about__content">
                    <h2 className="section__title title__left" data-title="About Us">Temukan Kehangatan Dalam Kebersamaan Dengan Secangkir Kopi</h2>
                    <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cupiditate, accusantium dolores exercitationem nobis illum vitae animi quos illo repudiandae ex voluptas assumenda eius repellat labore at id, eos aspernatur?</p>
                    <div className="about__details grid">
                        <p className="about__details-description">
                            <MdDoubleArrow className="about__details-icon"/>
                            Kopi Lokal Kualitas Premium
                        </p>
                        <p className="about__details-description">
                            <MdDoubleArrow className="about__details-icon"/>
                            Harga Ramah Dengan Dompet
                        </p>
                        <p className="about__details-description">
                            <MdDoubleArrow className="about__details-icon"/>
                            Tempat Nyaman Penuh Kehangatan
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;