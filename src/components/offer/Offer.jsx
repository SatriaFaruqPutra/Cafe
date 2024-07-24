import React from "react";
import offer1 from '../../assets/images/offer-1.jpg';
import offer2 from '../../assets/images/offer-2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Offer.css'; 

const Offer = () => {
    return ( 
        <section className="offer section" id="offer">
            <h2 className="section__title" data-title="Promo ">Special For You</h2>

            <Swiper spaceBetween={30} pagination={{clickable: true }} modules={[Pagination]} className="container">
                <SwiperSlide className="offer__item">
                    <div className="offer__img-wrapper">
                        <img src={offer1} alt="" className="offer__img" />
                    </div>
                    <div className="offer__content">
                        <h3 className="offer__title">Cappuccino Arabica</h3>
                        <span className="offer__discount">Get 20% Offer</span>
                        <p className="offer__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, ab! Aperiam laboriosam esse fuga a eum autem, blanditiis sunt aliquid iusto quae distinctio aliquam hic voluptates deserunt ducimus nulla optio.</p>
                        <a href="/" className="btn">Order</a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="offer__item">
                    <div className="offer__img-wrapper">
                        <img src={offer2} alt="" className="offer__img" />
                    </div>
                    <div className="offer__content">
                        <h3 className="offer__title">Cappuccino Arabica</h3>
                        <span className="offer__discount">Get 20% Offer</span>
                        <p className="offer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, veniam quos odit dolor, dicta soluta magnam nobis ab debitis vero ipsam repellendus possimus beatae aliquid molestias quasi aspernatur iste natus.</p>
                        <a href="/" className="btn">Order</a>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Offer