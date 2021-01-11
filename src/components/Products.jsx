import React, {useContext} from "react"
import {productContext} from "../Global/productContext"
import {cartContext} from "../Global/cartContext"

const Products = () => {
   const {products} = useContext(productContext);
   const {dispatch}= useContext(cartContext);

  
  //  const bought=document.querySelectorAll('.proButton');
  //  bought.forEach((buy)=>
  //  {
  //    buy.addEventListener('click',()=>
  //    {
  //      if(buy.innerHTML="add to cart")
  //      {
  //        buy.style.background="rgb(24, 168, 60)";
  //        buy.style.color="#fff";
  //        buy.innerHTML="IN CART";
  //      }
  //    })
  //  })
 
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
                   ${product.price}.00
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
            </div>
        ))}
        
        </div>
      
        </>
    )

}

export default Products;