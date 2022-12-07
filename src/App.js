
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth";
// import { sendCartData } from "./components/cart-clice";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData,sendCartData } from "./store/cart-actions";
import { uiAction } from "./store/ui-slice";
let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  const cart = useSelector(state=>state.cart);
  const isloggedIn = useSelector(state =>state.auth.isloggedIn);
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch]);


  useEffect(()=>{
    if(isFirstRender){
      isFirstRender = false; 
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
     
  
  },[cart,dispatch]);
  //console.log(notification)
  return (
    <div className="App">
      
    {notification &&  <Notification type={notification.type} message= { notification.message }/>}
      { !isloggedIn && <Auth />}
         {isloggedIn && <Layout/>} 
    </div>
  );
}

export default App;
