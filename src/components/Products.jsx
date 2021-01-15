import React, {useContext} from "react"
import {productContext} from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import { Alert } from 'react-alert';
const readmore=()=>
{
  const bought=document.querySelectorAll('.readMore');
   const more=document.querySelectorAll('.prodDetails')
 more.forEach((morecontent)=>
   {
    var readmore=morecontent.previousElementSibling.firstChild;
    var readless=morecontent.previousElementSibling.lastChild;
  
    readmore.addEventListener('click',()=>
    {   readmore.style.display="none";
    readless.style.display="flex";
    morecontent.style.display="flex";

    })
    readless.addEventListener('click',()=>
    {   readless.style.display="none";
    readmore.style.display="flex";
    morecontent.style.display="none";

    })
   })
}
const Products = () => {
   const {products} = useContext(productContext);
   const {dispatch}= useContext(cartContext);
 
   
 
    return(
        <>
        
        <div className="products" style={{marginTop: '30px'}}>
        {products.map(product => (
            <div className="product row " key={product.id}>
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
               <div className="proDate">
                  {product.month<10 ? `0${product.month}` :` ${product.month}`}/{product.year}
               </div>
            </div>
            <div className="proButton" onClick={() =>
              {
                 dispatch({type:'ADD_TO_CART', id: product.id, products})
            
                 
           }
            }>
                 <button className="buyNow">add to cart</button>
               </div>
              
               {product.productStatus === 'Chemicals & Materials' ? <div className="chemical">Chemicals & Materials</div>: ''}
               {product.productStatus === 'Consumer Goods' ? <div className="consumer">Consumer Goods</div>: ''}
               {product.productStatus === 'Food & Beverages' ? <div className="food">Food & Beverages</div>: ''}
               {product.productStatus === 'HealthCare' ? <div className="healthCare">Healthcare</div>: ''}
               {product.productStatus === 'ICT' ? <div className="ICT">ICT</div>: ''}
               {product.productStatus === 'Banking, Finance,Insurance' ? <div className="banking">Banking, Financal Services,Insuarance</div>: ''}
               {product.productStatus === 'Automotive and Aerospace' ? <div className="automotive">Automotive and Aerospace</div>: ''}
            </div>
            
            <div className="readMore" onClick={()=>{
              readmore();
            }}><span className="more">Read More</span> <span className="less">Read Less</span></div>
               <div className="prodDetails row ">
                 <div className="detailLeft col-md-6">
                 <p className="descriptions">{product.id}</p>
                 <p className="format">Format: pptx</p>
             <p className="cat">Category: {product.productStatus}</p>
             <a className="samplelink" href={product.Samplelink} download><i className="fa fa-download" aria-hidden="true"></i> Download Sample Document</a>
             </div>
             <div className="detailRight col-md-6" style={{marginTop:"0"}}>
                <h4> TABLE OF CONTENT</h4>
                <div className="toc">
              {product.toc}
                  </div>
             </div>
                 </div>

        </div>
        ))}
        
        </div>
      
        </>
    )

}

export default Products;