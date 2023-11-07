import React, { useEffect, useState } from 'react';
import CartCard from '../Components/CartCard';

const MyCart = () => {
const [myCart, setMyCart] = useState([]);
const [deleteMyCart, setDeleteMyCart] = useState([]);


 useEffect(() => {
  fetch('https://server-two-gules.vercel.app/cart')
  .then(res => res.json())
  .then(data => {
   setMyCart(data)
   // console.log(data);

  })
 },[])

 
 return (

  <div className='w-[85%] mx-auto '>
 
  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
  {
   myCart?.map((cart) =>
    <CartCard key={cart._id} cart ={cart} dltCart={deleteMyCart} setDltCart ={setDeleteMyCart} ></CartCard>
   )  
  }
  </div>
  </div>
 
 );
};

export default MyCart;