import React from "react";
import review1 from '../../assets/images/testimonial-1.jpg';
import review2 from '../../assets/images/testimonial-2.jpg';
import review3 from '../../assets/images/testimonial-3.jpg';
import review4 from '../../assets/images/testimonial-4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import './Testimoni.css';
 


const Testimoni = () => {
    return (
        <section className="review container section" id="review">
             <h2 className="section__title" data-title="Review">Client Review</h2>

             <Swiper 
                spaceBetween={30} 
                pagination={{clickable: true }} 
                breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }} 
                modules={[Pagination]} className="container">
                    <SwiperSlide className="review__item">
                        <div className="review__quote">
                            <p className="review__deskripsi">
                                There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.
                            </p>
                            <VscTriangleDown className="review__icon"/>
                        </div>
                        <div className="review__content">
                            <div className="review__img-wrapper">
                                <img src={review1} alt="" className="review__img" />
                            </div>
                            <div>
                                <h3 className="review__title">Billie Nurul</h3>
                                <p className="review__level">Customer</p>
                                <div className="review__rating">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <p className="review__level">02-20-2020</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="review__item">
                        <div className="review__quote">
                            <p className="review__deskripsi">
                                There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.
                            </p>
                            <VscTriangleDown className="review__icon"/>
                        </div>
                        <div className="review__content">
                            <div className="review__img-wrapper">
                                <img src={review2} alt="" className="review__img" />
                            </div>
                            <div>
                                <h3 className="review__title">Parker Jimenez</h3>
                                <p className="review__level">Customer</p>
                                <div className="review__rating">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <p className="review__level">02-20-2020</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="review__item">
                        <div className="review__quote">
                            <p className="review__deskripsi">
                                There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.
                            </p>
                            <VscTriangleDown className="review__icon"/>
                        </div>
                        <div className="review__content">
                            <div className="review__img-wrapper">
                                <img src={review3} alt="" className="review__img" />
                            </div>
                            <div>
                                <h3 className="review__title">Sylvia H Green</h3>
                                <p className="review__level">Customer</p>
                                <div className="review__rating">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <p className="review__level">02-20-2020</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="review__item">
                        <div className="review__quote">
                            <p className="review__deskripsi">
                                There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.
                            </p>
                            <VscTriangleDown className="review__icon"/>
                        </div>
                        <div className="review__content">
                            <div className="review__img-wrapper">
                                <img src={review4} alt="" className="review__img" />
                            </div>
                            <div>
                                <h3 className="review__title">Gordon D Novak</h3>
                                <p className="review__level">Customer</p>
                                <div className="review__rating">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <p className="review__level">02-20-2020</p>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide className="review__item">
                        <div className="review__quote">
                            <p className="review__deskripsi">
                                There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.
                            </p>
                            <VscTriangleDown className="review__icon"/>
                        </div>
                        <div className="review__content">
                            <div className="review__img-wrapper">
                                <img src={review1} alt="" className="review__img" />
                            </div>
                            <div>
                                <h3 className="review__title">Billie Nurul</h3>
                                <p className="review__level">Customer</p>
                                <div className="review__rating">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <p className="review__level">02-20-2020</p>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimoni