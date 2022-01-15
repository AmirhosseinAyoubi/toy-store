import React, { useContext, useState, useEffect } from 'react'
import "./style.css"
import { shoppingCart } from '../../Context/ShoppingCartContext'
import Loading from "../Loading/Loading"
import { productsConetxt } from '../../Context/ProductsContextProvider'



export default function ProductDetails({ id }) {
    const [productCount, setproductCount] = useState(1)
    const { state, dispatch } = useContext(shoppingCart)
    const products = useContext(productsConetxt)
    // const index=state.selectedItems.findIndex(item=>item.id===Number(id))
    const product = products.find(item => item.id == id)
    // console.log(state.selectedItems);
    // console.log(index);
    useEffect(() => {
        setproductCount(1)
        
    }, [id]);
    return (
        products.length > 0 ?
            <div className="product-container">
                <div className="info">
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                    <span>$ {product.price} USD</span>
                    <div className="details-btn">
                        <input value={productCount} onChange={(e) => setproductCount((e.target.value) > 0 ? e.target.value :1)} 
                            type="number" />
                        <button className="btn-toys"
                            onClick={() => dispatch(
                                {
                                    type: "Add_ITEMS",
                                    payload: {
                                        count: productCount,
                                        ...product


                                    }
                                })
                            }>Add to Cart
                        </button>
                    </div>
                </div>

                <img src={product.image} alt="product" />

            </div> : <Loading />
    )
}
