import React, { useState, useEffect, useContext } from 'react'
import "./style.css"
import { shoppingCart } from '../../../Context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa"
export default function MainNav() {
    const { state, dispatch } = useContext(shoppingCart);

    const [toggle, settoggle] = useState(false)



    useEffect(() => {
        window.onclick = function (e) {

            if (e.target.className !== "link" && toggle) {
                settoggle(false)
            }

        }
    }, [toggle]);

    return (
        <>
            <div className="index-bottom-nav">
                <div className="container-xl">
                    <div className="navbar-content">
                        <div className="navbar-item">
                            <h4><Link to="/home" className="toy-store" href="index.html"> ToyStore</Link></h4>
                            
                                <div className={`navbar-links ${toggle && "show"}`}>
                                    <ul>
                                        <li className="link"><Link to="/catalog"  href="catalog.html">Catalog</Link ></li>
                                        <li className="link"><Link to="/delivery"  href="delivery.html">Delivery</Link></li>
                                        <li className="link"><Link to="/about"  href="about.html">About</Link></li>
                                        <li className="link"><Link  to="/contacts" href="contacts.html">Contacts</Link></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="shopping-cart">
                            <ul onClick={() => dispatch({ type: "show" })}>


                                <li>Cart</li>
                                <li><img
                                    src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf75c3bf02346640399fec_cart-icon.svg"
                                    alt="" />
                                </li>
                                <li><span className="badge badge-pill
                                        shopping-cart-badge">{state.totalItems}</span></li>

                            </ul>

                            <div className="collaps" onClick={() => settoggle(!toggle)}>
                                <div className="collaps-icon">
                                    <FaBars/>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
          
            
        </>
    )
}
