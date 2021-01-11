import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"

import document from "../assets/Untitled.png"
import document2 from "../assets/Untitled2.png"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: ' Chemicals & Materials', price: 40, image: document, productStatus: 'Consumer Goods'},
        {id: 2, name: 'Consumer Goods', price: 200, image: document2,productStatus: 'Chemicals & Materials'},
        {id: 3, name: 'Consumer Goods', price: 300, image: document,productStatus: 'Chemicals & Materials'},
        {id: 4, name: 'Food & Beverages', price: 150, image: document2,productStatus: 'Chemicals & Materials'},
        {id: 5, name: 'HealthCare', price: 160, image: document,productStatus: 'Consumer Goods'},
        {id: 6, name: 'Food & Beverages', price: 500, image: document2,productStatus: 'Chemicals & Materials'},
        {id: 7, name: 'HealthCare', price: 240, image: document,productStatus: 'Consumer Goods'},
        {id: 8, name: 'Food & Beverages', price: 120, image: document2,productStatus: 'Chemicals & Materials'},
      ])
      
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;