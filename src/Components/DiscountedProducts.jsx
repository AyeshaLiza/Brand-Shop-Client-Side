import React from 'react';

const DiscountedProducts = ({product}) => {
 const {image, name, price} = product  || []
 return (
  <div>
     <div className="card rounded-lg bg-base-100 ">
     <div className=" h-52">
       <figure ><img src={image} className="w-96 h-60" alt="Brands"/></figure>
     </div>
  <div className="">
    <h2 className="card-title text-center text-white text-2xl font-semibold ">{name}</h2>
    <p>{price}</p>
 
  </div>
</div>
  </div>
 );
};

export default DiscountedProducts;