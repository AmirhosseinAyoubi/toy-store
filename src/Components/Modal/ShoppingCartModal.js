import React, { useContext } from 'react'
import "./style.css"
import { shoppingCart } from '../../Context/ShoppingCartContext';
import ShoppingCartItems from '../ShoppingCartItems/ShoppingCartItems';
import { FaTimesCircle } from 'react-icons/fa';
export default function ShoppingCartModal() {
    const { state, dispatch } = useContext(shoppingCart);

    return (
        state.modalState &&
        <div className="modal-container"  >
            <div className="shopping-cart-modal " data-aos="zoom-in">
                <div className="modal-header">
                    <h3>Your Cart</h3>
                    <span className="close-modal" onClick={() => dispatch({ type: "hide" })}><FaTimesCircle/></span>
                </div>
                <div className="modal-body">
                    {state.selectedItems.length > 0 ?
                        <>
                            {state.selectedItems.map(item => <ShoppingCartItems key={item.id} image={item.image} id={item.id} name={item.name} price={item.price} />)}
                            <div className="subtotal"><span>Subtotal</span> <span>$ {state.totalPrice} USD</span></div>
                            <button className="btn-toys" onClick={() => dispatch({ type: "CHECKOUT" })}>Continue to Checkout</button>
                            {state.checkOut ? <span className="checkout">Checkout is disabled on this site.</span> : null}
                        </>
                        : <p>No items found.</p>}
                </div>
            </div>
        </div >

    )
}
