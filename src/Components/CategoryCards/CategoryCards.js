import React, { useContext } from 'react'
import { productsConetxt } from "../../Context/ProductsContextProvider"
import CategoryCard from './CategoryCard/CategoryCard'
import "./style.css"
export default function ProductCategories() {
    const products = useContext(productsConetxt)
    const categoryCards = products.map(item => {
        if (item.id < 3) {
            return <CategoryCard key={item.id} image={item.image} name={item.name} category={item.category} />
        }
    })
    return (
        <div className="product-row-1" id={"categoryCards"}>
            {categoryCards}
        </div>
    )
}
