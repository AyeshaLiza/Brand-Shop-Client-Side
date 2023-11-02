import React, { useEffect, useState } from 'react';
import DiscountedProducts from './DiscountedProducts';
import { useParams } from 'react-router-dom';

const Discount = () => {
 const [discountProduct, setDiscountProduct] = useState([]);
 
 const {discount} = useParams()
//  console.log(discount);

 useEffect(() =>{
  fetch(`http://localhost:4000/product`)
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setDiscountProduct(data)
  }
  )
}, [])

useEffect(() => {
  const findDiscountedproduct = discountProduct?.filter(discount => discount.discount == discount)
  // console.log(findProductDetail);
  // setFilteredDetail(findProductDetail)
}, [discount, discountProduct])


 return (
  <div className='space-y-5 my-16'>
  <div className='text-center text-black '>
  <h1 className='font-bold text-4xl'>
    Get upto 60%  Discount
   </h1>
   <p className='text-xl font-medium mt-8 md:max-w-lg mx-auto max-w-sm'>Upto 60% Flat discount for our new products, grab your chance soon.</p>
   </div> 
    <div>
    {
     discountProduct?.map((products) => <DiscountedProducts key={products._id} product={products}></DiscountedProducts>
     )
    }
    </div>
     
  </div>
 );
};

export default Discount;