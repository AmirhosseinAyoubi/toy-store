import React, { useContext } from 'react'
import { productsConetxt } from '../../Context/ProductsContextProvider'
import Instagram from './Instagram'
import "./style.css"

export default function InstagramLinks({ number }) {
    const products = useContext(productsConetxt)
    const posts = products.map(item => {
        if (item.id <= number) {
           return <Instagram key={item.id} image={item.image}/>
        }
    })
    return (
        <div className="instagram-posts">
            {posts}
        </div>
    )
}
