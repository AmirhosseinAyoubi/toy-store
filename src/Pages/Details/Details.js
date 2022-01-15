import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../Components/Products/Products'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Border from '../../Components/Border/Border'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'


export default function Details() {
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])
    return (
        <div className="container-lg">
            <ProductDetails id={id} />
            <Border title={"Related Products"} />
            <Products number={4} category={"wooden"} />
            <Products number={4} category={"stuffed"} />
            <Subscribe />
        </div>
    )
}
