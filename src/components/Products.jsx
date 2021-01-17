import React, {useContext,useState} from "react"
import {Link} from 'react-router-dom';
import {productContext} from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const readmore=()=>
{
  const bought=document.querySelectorAll('.readMore');
   const more=document.querySelectorAll('.prodDetails')
 more.forEach((morecontent)=>
   {
    var readmore=morecontent.previousElementSibling.firstChild;
    var readless=morecontent.previousElementSibling.lastChild;
    var prodimage=morecontent.parentElement.parentElement.firstElementChild.firstElementChild;
   
  
    prodimage.addEventListener('click',()=>
    {   readmore.style.display="none";
    readless.style.display="flex";
    morecontent.style.display="flex";
    morecontent.scrollIntoView()

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
  
   const [value,setValue]=useState(' ');
  
   const [filter,setfilter]=useState('0');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);
   setfilter(1)
   if(e=="All")
   setfilter(0);

    
  }

  

    return(
        <>
        <div className="filteringDiv">
        <DropdownButton
      alignRight
      title="Filter By: "
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
           <Dropdown.Item eventKey="All" >All categories</Dropdown.Item>
              <Dropdown.Item eventKey="Chemicals & Materials">Chemicals & Materials</Dropdown.Item>
              <Dropdown.Item eventKey="Consumer Goods">Consumer Goods</Dropdown.Item>
              <Dropdown.Item eventKey="Food & Beverages">Food & Beverages</Dropdown.Item>
              <Dropdown.Item eventKey="HealthCare">HealthCare</Dropdown.Item>
              <Dropdown.Item eventKey="ICT">Internet, Communication, Technology</Dropdown.Item>
              <Dropdown.Item eventKey="Banking, Finance,Insurance">Banking, Finance, Insurance</Dropdown.Item>
              <Dropdown.Item eventKey="Automotive and Aerospace">Automotive and Aerospace</Dropdown.Item>
             
      </DropdownButton>
             <h5 id="filterquery">{filter!=1 ?" All Products" : `${value}` }</h5>
        </div>
        
        
        {filter !=1 ?  <div className="products" style={{marginTop: '30px'}}>
        {products.map(product => (
            <div className="product row " key={product.id}>
              <div className="pro">
            <div className="productImage" onClick={()=>{
              readmore();
            }} >
              <img src={product.image} alt="Not found" className="image"/>
              <div className="over">
    <div className="showtext">Double Click to Read More...</div>
  </div>
            </div>
            <div className="productDetails ">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   Rs.{product.price}.00
               </div>
               <div className="row" style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>
               <div className="proDate flex col-xs-6">
              <span style={{color:"gray"}}> Published:</span> {product.month<10 ? `0${product.month}` :` ${product.month}`}/{product.year}
               </div>
               <div className="proToc flex col-xs-6">
              <span style={{color:"gray"}}> TOC:</span> {product.toc== true? <i className="fa fa-check-square-o toctrue" aria-hidden="true"></i> :'Unavailable'}
               </div></div>
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
            <div className="col-md-6 ">
            <div className="readMore" onClick={()=>{
              readmore();
            }}><span className="more"> </span> <span className="less">&times;</span></div>
               <div className="prodDetails  ">
                 <div className="detailLeft col-md-12">
                 
                <h4 style={{background:"#fff",position:"sticky",top:"0"}}> TABLE OF CONTENT</h4>
                <div className="table">
              {product.table}
                  </div>
             </div>
                 </div>

        </div></div>
        ))}
        
        </div>
      :  <div className="products" style={{marginTop: '30px'}}>
      {products.filter(productAll => 
  
  productAll.productStatus == `${value}`).map(product => (
          <div className="product row " key={product.id}>
            <div className="pro">
          <div className="productImage" onClick={()=>{
            readmore(); console.log(products)
          }} >
            <img src={product.image} alt="Not found" className="image"/>
            <div className="over">
  <div className="showtext">Double Click to Read More</div>
</div>
          </div>
          <div className="productDetails ">
              <div className="proName">
               <h4>{product.name}</h4>
              </div>
             <div className="proPrice">
                 Rs.{product.price}.00
             </div>
             <div className="row" style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>
             <div className="proDate flex col-xs-6">
            <span style={{color:"gray"}}> Published:</span> {product.month<10 ? `0${product.month}` :` ${product.month}`}/{product.year}
             </div>
             <div className="proToc flex col-xs-6">
            <span style={{color:"gray"}}> TOC:</span> {product.toc== true? <i className="fa fa-check-square-o toctrue" aria-hidden="true"></i> :' '}
             </div></div>
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
          <div className="col-md-6 ">
          <div className="readMore" onClick={()=>{
            readmore();
          }}><span className="more"> </span> <span className="less">&times;</span></div>
             <div className="prodDetails  ">
               <div className="detailLeft col-md-12">
               
              <h4 style={{background:"#fff",position:"sticky",top:"0"}}> TABLE OF CONTENT</h4>
              <div className="table">
            {product.table}
                </div>
           </div>
               </div>

      </div></div>
      ))}
      
      </div>
    }
       
        </>
    )

}

export default Products;