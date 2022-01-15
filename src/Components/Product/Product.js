import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
export default function Product({ image, name, price ,id}) {
    return (
        <div className="animals-product-items"
            data-aos="zoom-in" data-aos-duration="500">
            <Link to={`/details/${id}`}>
                <img className="animals-items-img"
                    src={image}
                    alt="product" />
                <p>{name}</p>
                <p>{`$ ${price} USD`}</p>
            </Link >
        </div>
    )
}
