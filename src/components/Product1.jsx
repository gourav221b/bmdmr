import React, {useContext,useState} from "react"
import {Link} from 'react-router-dom';
import {productContext} from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Dropdown,ListGroup} from 'react-bootstrap'

const readmore=()=>
{
  
  const bought=document.querySelectorAll('.readMore');
   const more=document.querySelectorAll('.prodDetails')
 more.forEach((morecontent)=>
   {
    var readmore=morecontent.previousElementSibling.firstChild;
    var readsecond=morecontent.previousElementSibling.lastChild;
    var readless=morecontent.previousElementSibling.lastChild.lastChild;
    var prodimage=morecontent.parentElement.parentElement.firstElementChild.firstElementChild;
   console.log(readmore,readsecond,readless,prodimage)
  
    prodimage.addEventListener('click',()=>
    {   readmore.style.display="none";
    readless.style.display="flex";
    readsecond.style.display="flex";
    morecontent.style.display="flex";
    morecontent.style.flexDirection="column";
    morecontent.scrollIntoView()

    })
    readless.addEventListener('click',()=>
    {  
    readless.style.display="none";
    readsecond.style.display="none";
    readmore.style.display="flex";
    morecontent.style.display="none";

    })
   })

 
}


const Product1 = () => {
  
   const {products} = useContext(productContext);
   const {dispatch}= useContext(cartContext);
  
   const [value,setValue]=useState(window.location.pathname.split('/')[2]);
   const [open, setOpen] = useState(false);
   const [filter,setfilter]=useState(1);
  //  console.log("VALUE IS",value)
  // if(value!="AllCategories")
  // setfilter(1);
  
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e);

    document.querySelector('.valueName').scrollIntoView();
   setfilter(1)

   if(e=="AllCategories")
   setfilter(0);

    
  }

  
  var cartbtn =document.querySelectorAll('.proButton');
  cartbtn.forEach((btn)=>{
      btn.addEventListener('click',()=>{
          btn.style.background="green";
          btn.style.color="#fff";
          btn.innerHTML="IN CART";
      })
     
  })
  var str=`${value}`;
  var res;
  switch(str)
  {
    case 'Chemicals&Materials': res="Chemicals & Materials"; break;
    case 'ConsumerGoods': res="Consumer Goods"; break;
    case 'Food&Beverages': res="Food & Beverages"; break;
    case 'HealthCare': res="Healthcare"; break;
    case 'ICT': res="ICT"; break;
    case 'BFS': res="Banking, Finance, Insurance"; break;
    case 'Automotive&Aerospace': res="Automotive & Aerospace"; break;
    default: res="All Categories";break;
  }

    return(
      <> <div className="filteringDiv ">
        <DropdownButton
      alignRight
      title="Filter By: "
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
           <Dropdown.Item eventKey="AllCategories" >All categories</Dropdown.Item>
              <Dropdown.Item eventKey="Chemicals&Materials">Chemicals & Materials</Dropdown.Item>
              <Dropdown.Item eventKey="ConsumerGoods">Consumer Goods</Dropdown.Item>
              <Dropdown.Item eventKey="Food&Beverages">Food & Beverages</Dropdown.Item>
              <Dropdown.Item eventKey="HealthCare">HealthCare</Dropdown.Item>
              <Dropdown.Item eventKey="ICT">Internet, Communication, Technology</Dropdown.Item>
              <Dropdown.Item eventKey="BFS">Banking, Finance, Insurance</Dropdown.Item>
              <Dropdown.Item eventKey="Automotive&Aerospace">Automotive and Aerospace</Dropdown.Item>
             
      </DropdownButton>
             <h5 id="filterquery">{filter!=1 ?" All Categories" : `${res}` }</h5>
        </div>
        <div className="mainShop">
       
        <ListGroup 
        defaultChecked
      alignRight
      title="Filter By: "
      id="listgroup"
      onSelect={handleSelect}
     
        >
            <ListGroup.Item eventKey="AllCategories" >All categories</ListGroup.Item>
              <ListGroup.Item eventKey="Chemicals&Materials">Chemicals & Materials</ListGroup.Item>
              <ListGroup.Item eventKey="ConsumerGoods">Consumer Goods</ListGroup.Item>
              <ListGroup.Item eventKey="Food&Beverages">Food & Beverages</ListGroup.Item>
              <ListGroup.Item eventKey="HealthCare">HealthCare</ListGroup.Item>
              <ListGroup.Item eventKey="ICT">Internet, Communication, Technology</ListGroup.Item>
              <ListGroup.Item eventKey="BFS">Banking, Finance, Insurance</ListGroup.Item>
              <ListGroup.Item eventKey="Automotive&Aerospace">Automotive and Aerospace</ListGroup.Item>
             
      </ListGroup >
        
        {filter !=1 ?  <div className="products " style={{marginTop: '30px'}}>
            <h2 className="valueName">All Categories</h2>
        {products.map(product => (
            <div className="product row " key={product.id}>
              <div className="pro row">
           
            <div className="productDetails col-md-12 ">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
                <div className="proToc " onClick={()=>{
                   readmore()
               }}>
                   {product.categorisation}
               <span style={{color:"blue"}} className="productRead"> Read More </span>
               </div>
              
               <div className="row productrow" style={{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-around",marginTop:"40px", width:"100%"}}>
               <div className="proDate flex">
              <span style={{color:"gray"}}> Published:</span> {product.month<10 ? `0${product.month}` :` ${product.month}`}/{product.year}
               </div>
               <div className="proToc flex">
              <span style={{color:"gray"}}> TOC:</span> {product.toc== true? <i className="fa fa-check-square-o toctrue" aria-hidden="true"></i> :<i className="fa fa-square-o" ></i>}
               </div>
               <div className="proPrice flex">
                   <span>Price:</span>
                   Rs.{product.price}.00
               </div>
               <div className="proButton col-md-4" onClick={() =>
              {
                 dispatch({type:'ADD_TO_CART', id: product.id, products})
                   
                 
           }
            }>
                 <button className="buyNow">add to cart</button>
               </div>
               </div>
            </div>
            
              
            </div>
            <div className="col-lg-12 " style={{padding:0}}>
            <div className="readMore" onClick={()=>{
              readmore();
            }}><span className="more"> </span> <span className="less"><h5 style={{position:"sticky",top:"0",pointerEvents:"none",textDecoration:"none"}}> &nbsp; TABLE OF CONTENT</h5> <span>&times;</span></span></div>
               <div className="prodDetails">
                 <div className="detailLeft col-md-12">
                 
                
                <div className="table" style={{padding:"2%"}}>
              {product.table}
                  </div>
             </div>
                 </div>

        </div></div>
        ))}
        
        </div>
      :  <div className="products " style={{marginTop: '30px'}}>
          <h2 className="valueName">{res}</h2>
      {products.filter(productAll => 
  
  productAll.productStatus == `${value}`).map(product => (
      
    <div className="product row " key={product.id}>
              <div className="pro row">
           
            <div className="productDetails col-md-12 ">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
                <div className="proToc " onClick={()=>{
                   readmore()
               }}>
                   {product.categorisation}
               <span style={{color:"blue"}} className="productRead"> Read More </span>
               </div>
              
               <div className="row productrow" style={{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-around",marginTop:"40px", width:"100%"}}>
               <div className="proDate flex">
              <span style={{color:"gray"}}> Published:</span> {product.month<10 ? `0${product.month}` :` ${product.month}`}/{product.year}
               </div>
               <div className="proToc flex">
              <span style={{color:"gray"}}> TOC:</span> {product.toc== true? <i className="fa fa-check-square-o toctrue" aria-hidden="true"></i> :<i className="fa fa-square-o" ></i>}
               </div>
               <div className="proPrice flex">
                   <span>Price:</span>
                   Rs.{product.price}.00
               </div>
               <div className="proButton col-md-4" onClick={() =>
              {
                 dispatch({type:'ADD_TO_CART', id: product.id, products})
                   }
            }>
                 <button className="buyNow">add to cart</button>
               </div>
               </div>
            </div>
            
              
            </div>
            <div className="col-lg-12 " style={{padding:0}}>
            <div className="readMore" onClick={()=>{
              readmore();
            }}><span className="more"> </span> <span className="less"><h5 style={{position:"sticky",top:"0",pointerEvents:"none",textDecoration:"none"}}> &nbsp; TABLE OF CONTENT</h5> <span>&times;</span></span></div>
               <div className="prodDetails">
                 <div className="detailLeft col-md-12">
                 
                
                <div className="table" style={{padding:"2%"}}>
              {product.table}
                  </div>
             </div>
                 </div>

        </div></div>
        ))}
      
      </div>
    }
       
        </div>
        </>
    )

}

export default Product1;