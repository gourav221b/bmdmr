import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const Message = ({type, message}) => {
   const func = () => {
       if(type === "success"){
        toast.success(message, {
            position: toast.POSITION.TOP_RIGHT
          })
          alert('Payment successful');
       } else if(type === "error"){
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT
          })
          alert('Payment failed');
       }
   }
   return(
       <>
       {func()}
       </>
   )
  

}
export default Message;