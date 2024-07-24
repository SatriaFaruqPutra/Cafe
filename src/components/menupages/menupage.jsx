import React, { useState, useEffect } from 'react';
import axios from '../../axios/link';
import "./menupage.css"; 

const Menupages = () => {

        const [data, setData] = useState(null);
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('/menu');
              setData(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);
      

    return (
        <section className="menu section" id="menupages">
            <h2 className="section__title" data-title="Our Menu">Let's Check Our Menu</h2>
           {data.map((value, index) =>
            <div key={index} className="menu__item grid">
                        <div className="menu__img-warpper">
                            <img src={value.gambar} alt="" className="menu__img" />
                        </div>
                        <div className="menu__data">
                            <h2>{value.idkategori}</h2>
                            <h3 className="menu__title">{value.menu}</h3>
                            <p className="menu__description">{value.deskripsi}</p>
                            <span className="menu__price">{value.harga}</span>
                        </div>
            </div>
        )}

                    </section>
        )

        }

export default Menupages

            /* <h5 className="kategori__title">Coffee Drink</h5>
            <div className="menu__grid container grid">

                    

                    

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

            <h5 className="kategori__title" >Non Coffee Drink</h5>
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

            <h5 className="kategori__title" >Food & Snack</h5>
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

                </div> */