import React from "react";
import shapeTow from "../../assets/images/shape-2.png";
import shapeThree from "../../assets/images/shape-3.png";
import "./Cart.css";
import "./../header/Header"


const Cart = () => {
    return (
        <section className="cart section" id="cart">
            <h2 className="section__title" data-title="Cart">Check Out</h2>

            <h5 className="cart__title">Keranjang Anda</h5>
            <div >
            <table className="cart__table" border="3px">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Menu</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Americano</td>
                        <td>12.000</td>
                        <td>1</td>
                        <td>12.000</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            <button className="btn btn--flex cart__btn">Check Out</button>

            <img src={shapeTow} alt="" className="shape__two"/>
            <img src={shapeThree} alt="" className="shape__three"/>
        </section>
        
    )
}

export default Cart