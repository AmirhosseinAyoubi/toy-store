import React, { useContext } from 'react'
import { productsConetxt } from '../../Context/ProductsContextProvider'
import Product from '../Product/Product';
import "./style.css"

export default function Products({ number, category }) {
    const productsContext = useContext(productsConetxt);
    let count = 0
    const products = productsContext.map(item => {

        if (count < number && category === item.category) {
            count++

            return <Product key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />
        }
    })

    return (
        <div className="animals-items">
            {products}
        </div>
    )
}
