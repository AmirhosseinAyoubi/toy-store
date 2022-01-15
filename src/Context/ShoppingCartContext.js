import React, { useReducer } from 'react'



const initState = {
    modalState: false,
    selectedItems: localStorage.getItem("cart").length > 0 ? JSON.parse(localStorage.getItem("cart")) : [],
    totalItems: localStorage.getItem("cart").length > 0 ?
        JSON.parse(localStorage.getItem("cart")).reduce((total, product) => total + Number(product.count), 0) : 0,
    totalPrice: localStorage.getItem("cart").length > 0
        ? JSON.parse(localStorage.getItem("cart")).reduce((total, product) => total + (product.price) * product.count, 0).toFixed(2) : 0,
    checkOut: false
}
const sumItemsCountAndPrice = (selectedItems) => {

    const totalItems = selectedItems.reduce((total, product) => total + Number(product.count), 0)
    const totalPrice = selectedItems.reduce((total, product) => total + (product.price) * product.count, 0).toFixed(2)

    return { totalItems, totalPrice }


}



const modalHandler = (state, action) => {

    switch (action.type) {

        case "show":
            return {
                ...state,
                modalState: true
            }
        case "hide":
            return {
                ...state,
                modalState: false,
                checkOut: false

            }
        case "Add_ITEMS":

            if (state.selectedItems.find(item => item.id == action.payload.id)) {
                const index = state.selectedItems.findIndex(item => item.id == action.payload.id)

                console.log((action.payload.count));
                state.selectedItems[index].count += Number(action.payload.count)
            }
            else {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: action.payload.count
                })
            }

            return {
                ...state,
                "modalState": true,
                selectedItems: [...state.selectedItems],
                ...sumItemsCountAndPrice(state.selectedItems)
            }
        case "UPDATE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].count = Number(action.payload.count)
            return {
                ...state,
                ...sumItemsCountAndPrice(state.selectedItems)

            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quantity -= action.payload.count
            return {
                ...state,
                ...sumItemsCountAndPrice(state.selectedItems)

            }
        case "REMOVE":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItemsCountAndPrice(newSelectedItems)

            }
        case "CHECKOUT":
            return {
                ...state,
                checkOut: true
            }




        default:
            return state





    }
}

export const shoppingCart = React.createContext()



export default function ShoppingCartContext({ children }) {



    const [state, dispatch] = useReducer(modalHandler, initState)
    localStorage.setItem("cart", JSON.stringify(state.selectedItems))
    return (
        <shoppingCart.Provider value={{ state, dispatch }}>
            {children}
        </shoppingCart.Provider>
    )
}
