import React, {useContext} from "react"
import {productContext} from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import { Alert } from 'react-alert';

const Products = () => {
   const {products} = useContext(productContext);
   const {dispatch}= useContext(cartContext);

  
   const bought=document.querySelectorAll('.readMore');
   bought.forEach((buy)=>
   {
     
     buy.addEventListener('click',()=>
     { 
      console.log(buy.nextElementSibling.classList);
      console.log(buy.innerHTML);
     buy.nextElementSibling.classList.add('block');
     })
   })
 
    return(
        <>
        
        <div className="products" style={{marginTop: '30px'}}>
        {products.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails ">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   Rs.{product.price}.00
               </div>
            </div>
            <div className="proButton" onClick={() =>
              {
                 dispatch({type:'ADD_TO_CART', id: product.id, products})
               
                 
           }
            }>
                 <button className="buyNow">add to cart</button>
               </div>
              
               {product.productStatus === 'Chemicals & Materials' ? <div className="new">Chemicals & Materials</div>: ''}
               {product.productStatus === 'Consumer Goods' ? <div className="hot">Consumer Goods</div>: ''}
            </div>
            <div className="readMore">Read More...</div>
               <div className="prodDetails">
                 <p className="descriptions">{product.id}</p>
                 <p className="format">Format: pptx</p>
             <p className="category">Category: {product.productStatus}</p>
             <a className="samplelink"><i className="fa fa-download" aria-hidden="true"></i> Download Sample Document</a>
                 </div>
            </div>
        ))}
        
        </div>
      
        </>
    )

}

export default Products;