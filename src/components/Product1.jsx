import React, {useContext,useState} from "react"
import {Link} from 'react-router-dom';
import {productContext} from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Dropdown,ListGroup} from 'react-bootstrap'
import Sample from '../components/samplemodal/SampleModal'
import '../components/samplemodal/sample.css'
import Custom from '../components/customModal/CustomModal'
import '../form-submission-handler'
const readmore=()=>
{
  
  const bought=document.querySelectorAll('.readMore');
   const more=document.querySelectorAll('.prodDetails')
 more.forEach((morecontent)=>
   {
    var readmore=morecontent.previousElementSibling.firstChild;
    var readsecond=morecontent.previousElementSibling.lastChild;
    var readless=morecontent.previousElementSibling.lastChild.lastChild;
    var prodimage=morecontent.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild;
    var sample= prodimage.parentElement.nextElementSibling;
    var samplemodal=readmore.parentElement.parentElement.nextElementSibling;
    var sampleicon= samplemodal.firstElementChild;
    var closebtn=samplemodal.firstElementChild.firstElementChild;
    var customizebtn= sample.nextElementSibling;
    var customizationtable= morecontent.nextElementSibling;
    var customcloser= morecontent.nextElementSibling.firstElementChild;
  // console.log("Custom:",customcloser)
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
    sample.addEventListener('click',()=>
    {
      samplemodal.style.display="flex";
      sampleicon.style.display="inline-block";
      
    })
    closebtn.addEventListener('click',()=>
    {
      samplemodal.style.display="none";
 
    })
    customizebtn.addEventListener('click',()=>
    {
      customizationtable.style.display="flex";
      
    })
  

   })
   
  
 
}


const Product1 = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
    case 'Energy&Power': res="Energy and Power"; break;
    default: res="All Categories";break;
  }
 
  const showbtn=document.querySelector('.showMore')

// function showmore()
// {  
//   const productDiv=document.querySelectorAll('.products') 
//   productDiv.forEach((prod)=>{
  
//       prod.style.height=`fit-content`
 

//   })
 
// }
readmore();
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
              <Dropdown.Item eventKey="Energy&Power">Energy and Power</Dropdown.Item>
             
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
              <ListGroup.Item eventKey="Energy&Power">Energy and Power</ListGroup.Item>
             
      </ListGroup >
        
        {filter !=1 ? <> <div className="products " style={{marginTop: '30px'}}>
            <h2 className="valueName">All Categories</h2>
        {products.map(product => (
          <>
            <div className="product row " key={product.id}>
             
              <div className="pro row">
           
            <div className="productDetails col-md-12 ">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
                <div className="proToc " onClick={()=>{
                   readmore()
               }} >
                   {product.categorisation}
               <span style={{color:"blue"}} className="productRead"> Read More </span>  </div>
               <div className="proSample" style={{marginTop:"10px",marginRight:"50px", display:"inline-block"}} onClick={()=>{
                  readmore();
               }}>

                 <span className="samplerequest"><i className="fa fa-bell" ></i> Request A Sample</span>
                 
               </div>
               <div className="proCustomize" onClick={()=>{
                 readmore();
               }} style={{display:"inline-block"}}>
                 <span className="customization">{product.customize==true?<i className="fa fa-check-square green" ></i>:<i className="fa fa-window-close red" ></i>} <span onClick={() => setModalShow(true)}>Customization {product.customize==true?"Available":"Unavailable"}</span> 
              
</span>

      
      
               </div>
             
              
               <div className="row productrow" style={{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-around",marginTop:"40px", width:"100%"}}>
               <div className="proDate flex">
              <span style={{color:"gray"}}> Published:</span> {product.month<10 ? `0${product.month}` :` ${product.month}`}/{product.year}
               </div>
               <div className="proToc flex">
              <span style={{color:"gray"}}> TOC:</span> {product.toc== true? <i className="fa fa-check-square green-o toctrue" ></i> :<i className="fa fa-square-o" ></i>}
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
                 <div className="sampleWrapper customWrapper">
         <section className="sample-section custom-section">
             <h1 className="closeModal" id="closemodal" onClick={()=>{
               document.querySelector('#closemodal').parentElement.parentElement.style.display="none";
             }}>&times;</h1>
<h1 className="title">Request Customization for</h1>
<h1 className="title" style={{fontStyle:"oblique"}}>{product.name}</h1>
<form action="https://script.google.com/macros/s/AKfycbwcb7p3xl6UyFLlvcwpNNq6IqTmMVNMLB3r1KLxhzTiSty4LPoiw7227Q/exec" className="gform">
<div className="input-wrapper">
<input type="text" name="name"  placeholder="Enter your Name*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="phone"  placeholder="Enter your Phone Number*" required/>
</div>
<div className="input-wrapper">
<input type="email" name="email"  placeholder="Enter your Active Email*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="company"  placeholder="Your Company* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="designation"  placeholder="Your Designation* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="skypeId"  placeholder="Your Skype Id" />
</div>
<div className="input-wrapper">
   <input type="text" defaultValue={product.name} style={{display:'none'}} name="type"/>
   <input type="text" defaultValue={product.id} style={{display:'none'}} name="id"/>
{/* <input type="email" name="email"  placeholder="Enter your Active Email Address" required/> */}
<button type="submit" className="btn arrow-btn" >
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
   <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
 </svg>
</button>
</div>
 <div style={{display:"none"}} class="thankyou_message" id="demo">
 <h2>
 </h2>
</div>
</form>
</section>
     </div>
     
    
        </div>
       
         <div className="sampleWrapper">
         <section className="sample-section">
             <h1 className="closeModal" id="closemodal" onClick={()=>{
               document.querySelector('#closemodal').parentElement.parentElement.style.display="none";
             }}>&times;</h1>
<h1 className="title">Ask A Free Sample For</h1>
<h1 className="title" style={{fontStyle:"oblique"}}>{product.name}</h1>
<form action="https://script.google.com/macros/s/AKfycbwcb7p3xl6UyFLlvcwpNNq6IqTmMVNMLB3r1KLxhzTiSty4LPoiw7227Q/exec" className="gform">
<div className="input-wrapper">
<input type="text" name="name"  placeholder="Enter your Name*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="phone"  placeholder="Enter your Phone Number*" required/>
</div>
<div className="input-wrapper">
<input type="email" name="email" id="sample" placeholder="Enter your Active Email*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="company"  placeholder="Your Company* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="designation"  placeholder="Your Designation* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="skypeId"  placeholder="Your Skype Id" />
</div>
<div className="input-wrapper">
   <input type="text" defaultValue={product.name} style={{display:'none'}} name="type"/>
   <input type="text" defaultValue={product.id} style={{display:'none'}} name="id"/>
{/* <input type="email" name="email" id="sample" placeholder="Enter your Active Email Address" required/> */}
<button type="submit" className="btn arrow-btn" >
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
   <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
 </svg>
</button>
</div>
 <div style={{display:"none"}} class="thankyou_message" id="demo">
 <h2>
 </h2>
</div>
</form>
</section>
     </div>
     </div>
     
     </>
       
       ))}
        
       
        
                  </div> 
                  </>
      : 
       <div className="products " style={{marginTop: '30px'}}>
          <h2 className="valueName">{res}</h2>
      {products.filter(productAll => 
  
  productAll.productStatus == `${value}`).map(product => (
      
    <>
            <div className="product row " key={product.id}>
             
              <div className="pro row">
           
            <div className="productDetails col-md-12 ">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
                <div className="proToc " onClick={()=>{
                   readmore()
               }} >
                   {product.categorisation}
               <span style={{color:"blue"}} className="productRead"> Read More </span>  </div>
               <div className="proSample" style={{marginTop:"10px",marginRight:"50px",display:"inline-block"}} onClick={()=>{
                  readmore();
               }}>

                 <span className="samplerequest"><i className="fa fa-bell" ></i> Request A Sample</span>
                 
               </div>
               <div className="proCustomize" onClick={()=>{
                 readmore();
               }} style={{display:"inline-block"}}>
                 <span className="customization">{product.customize==true?<i className="fa fa-check-square green" ></i>:<i className="fa fa-window-close red" ></i>} <span onClick={() => setModalShow(true)}>Customization {product.customize==true?"Available":"Unavailable"}</span> 
</span>
      {/* <Custom
        show={modalShow}
        name={product.name}
        id={product.id}
        onHide={() => setModalShow(false)}
      /> */}
               
               </div>
             
              
               <div className="row productrow" style={{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-around",marginTop:"40px", width:"100%"}}>
               <div className="proDate flex">
              <span style={{color:"gray"}}> Published:</span> {product.month<10 ? `0${product.month}` :` ${product.month}`}/{product.year}
               </div>
               <div className="proToc flex">
              <span style={{color:"gray"}}> TOC:</span> {product.toc== true? <i className="fa fa-check-square green-o toctrue" ></i> :<i className="fa fa-square-o" ></i>}
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
                 <div className="sampleWrapper customWrapper">
         <section className="sample-section custom-section">
             <h1 className="closeModal" id="closemodal" onClick={()=>{
               document.querySelector('#closemodal').parentElement.parentElement.style.display="none";
             }}>&times;</h1>
<h1 className="title">Request Customization for</h1>
<h1 className="title" style={{fontStyle:"oblique"}}>{product.name}</h1>
<form action="https://script.google.com/macros/s/AKfycbwcb7p3xl6UyFLlvcwpNNq6IqTmMVNMLB3r1KLxhzTiSty4LPoiw7227Q/exec" className="gform">
<div className="input-wrapper">
<input type="text" name="name"  placeholder="Enter your Name*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="phone"  placeholder="Enter your Phone Number*" required/>
</div>
<div className="input-wrapper">
<input type="email" name="email"  placeholder="Enter your Active Email*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="company"  placeholder="Your Company* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="designation"  placeholder="Your Designation* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="skypeId"  placeholder="Your Skype Id" />
</div>
<div className="input-wrapper">
<input type="text" name="message"  placeholder="Describe your needs" />
</div>
<div className="input-wrapper">
   <input type="text" defaultValue={product.name} style={{display:'none'}} name="type"/>
   <input type="text" defaultValue={product.id} style={{display:'none'}} name="id"/>
{/* <input type="email" name="email"  placeholder="Enter your Active Email Address" required/> */}
<button type="submit" className="btn arrow-btn" >
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
   <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
 </svg>
</button>
</div>
 <div style={{display:"none"}} class="thankyou_message" id="demo">
 <h2>
 </h2>
</div>
</form>
</section>
     </div>
     
    
                 </div>
               
       
         <div className="sampleWrapper">
         <section className="sample-section">
             <h1 className="closeModal" id="closemodal" onClick={()=>{
               document.querySelector('#closemodal').parentElement.parentElement.style.display="none";
             }}>&times;</h1>
<h1 className="title">Ask A Free Sample For</h1>
<h1 className="title" style={{fontStyle:"oblique"}}>{product.name}</h1>
<form action="https://script.google.com/macros/s/AKfycbwcb7p3xl6UyFLlvcwpNNq6IqTmMVNMLB3r1KLxhzTiSty4LPoiw7227Q/exec" className="gform">
<div className="input-wrapper">
<input type="text" name="name"  placeholder="Enter your Name*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="phone"  placeholder="Enter your Phone Number*" required/>
</div>
<div className="input-wrapper">
<input type="email" name="email"  placeholder="Enter your Active Email*" required/>
</div>
<div className="input-wrapper">
<input type="text" name="company"  placeholder="Your Company* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="designation"  placeholder="Your Designation* " required/>
</div>
<div className="input-wrapper">
<input type="text" name="skypeId"  placeholder="Your Skype Id" />
</div>
<div className="input-wrapper">
   <input type="text" defaultValue={product.name} style={{display:'none'}} name="type"/>
   <input type="text" defaultValue={product.id} style={{display:'none'}} name="id"/>
{/* <input type="email" name="email"  placeholder="Enter your Active Email Address" required/> */}
<button type="submit" className="btn arrow-btn" >
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
   <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
 </svg>
</button>
</div>
 <div style={{display:"none"}} class="thankyou_message" id="demo">
 <h2>
 </h2>
</div>
</form>
</section>
     </div>
     
     
    
     </div>
     
     </>))}
      
      </div>
    }

       
        </div>
       
        </>
    )

}

export default Product1;