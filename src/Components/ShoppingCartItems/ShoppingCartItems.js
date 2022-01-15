import React, { useContext, useState } from 'react'
import "./style.css"
import { shoppingCart } from '../../Context/ShoppingCartContext';
export default function ShoppingCartItems({ name, image, price, id }) {

    const { state, dispatch } = useContext(shoppingCart);
    const product = state.selectedItems.find(item => item.id == id)
    const [updatedcount, setUpdatedcount] = useState(product.count);

    const changeHandler = (e) => {
        setUpdatedcount(e.target.value > 0 ? e.target.value : 1)


    }
    const blurHandler = () => {
        if (updatedcount != product.count) {
            dispatch(
                {
                    type: "UPDATE",
                    payload: {
                        ...product,
                        count: updatedcount



                    }
                })
        }
    }
    return (
        <div className="shopping-cart-item-info-container">
            <div className="shopping-cart-item-info">
                <img src={image} alt="product" />
                <div>
                    <h3>{name}</h3>
                    <p>$ {price} USD</p>
                    <button onClick={() => dispatch({ type: "REMOVE", payload: { id: id } })}>remove</button>
                </div>
            </div>
            <input type="number" value={updatedcount} onChange={(e) => changeHandler(e)} onBlur={blurHandler()} />
        </div>
    )
}
