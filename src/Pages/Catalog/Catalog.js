import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
import Product from '../../Components/Product/Product'
import { productsConetxt } from '../../Context/ProductsContextProvider'
import Button from "../../Components/Button/Button"
import InstagramLinks from '../../Components/InstagramLinks/InstagramLinks'
import Intro from '../../Components/Intro/Intro'
import Subscribe from '../../Components/Subscribe/Subscribe'
import FilterBtns from '../../Components/FilterBtns/FilterBtns'
import Loading from "../../Components/Loading/Loading"

export default function Catalog() {
    const [categoryName, setcategoryName] = useState("All")
    const [Filetred, setFiletred] = useState(null)
    const [loading, setloading] = useState(true)
    const products = useContext(productsConetxt)

    const handleFilter = (cate) => {
        if (products.length > 0) {
            if (cate !== "all") {
                setcategoryName(cate)
                setFiletred(products.map(item =>
                    item.category == cate && <Product key={item.id} name={item.name} image={item.image} id={item.id} price={item.price} />))

            }
            else {
                setcategoryName("All")
                setFiletred(products.length > 0 ? products.map(item => <Product key={item.id} name={item.name} image={item.image} id={item.id} price={item.price} />) : null)
            }
        }
    }



    useEffect(() => {
        window.scrollTo(0, 0)
        handleFilter("all")

    }, [products]);

    return (
        <div className="container-lg">
            <FilterBtns categoryName={categoryName} handleFilter={handleFilter} />
            
                <div className="animals-items">
                    {Filetred}
                </div> 
            


            <Subscribe />
            <Intro text={"We're on Instagram!"} title={"@ElasticThemes"} />
            <div className="instagram">
                <InstagramLinks number={6} />
                <Button className={"instagram-btn"} text={"See more photos"} />
            </div>
        </div>
    )
}
