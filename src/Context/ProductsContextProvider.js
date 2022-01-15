import React, { useState, useEffect } from 'react'
import { get } from "../Services/API"

export const productsConetxt = React.createContext()

export default function ProductsContextProvider({ children }) {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
             setproducts(await get("products").then(res=>res.products))
        }
        fetchData()
    }, []);

    return (
        <productsConetxt.Provider value={products}>
            {children}
        </productsConetxt.Provider>
    )
}
