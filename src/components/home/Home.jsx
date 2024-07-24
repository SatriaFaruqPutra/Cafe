import React from "react";
import './Home.css'; 
import { useMatch, Link } from "react-router-dom";

const Home = () => {
    // const {path} = useMatch();
    return (
        <section className="home" id="home">
            <div className="home__container container">
                <div className="home__content">
                    <span className="home__subtitle">Sekawan Kopi</span>
                    <h1 className="home__title">Nikmatnya Bercerita Dalam Kebersamaan Dengan Hangatnya Secangkir Kopi</h1>
                    <p className="home__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate perspiciatis ducimus nisi a sed eum eius, ipsam natus quos est provident, sit molestiae inventore labore nihil assumenda omnis quisquam voluptatibus.</p>
                    <div className="home__btn">
                        <Link to='/menu'><button className="btn">Menu</button></Link>
                        <Link to='/reservasi'><button className="btn home__res">Reservasi</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;