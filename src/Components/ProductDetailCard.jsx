import React from 'react';
import Swal from 'sweetalert2';

const ProductDetailCard = ({detail}) => {
 const {photo, brandName, shortD} =detail || []
  const cartProduct = {photo, brandName, shortD}
  // console.log(cartProduct);

 const handleAddtoCart = () => {
  fetch('http://localhost:4000/cart',{
    method : 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(cartProduct)
  })
  .then(res => res.json())
  .then(data => {
    if (data.insertedId) {
      Swal.fire({
        title: 'success!',
        text: 'Data Added Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })
 }
 return (
  <div>
      <div className="card rounded-lg bg-base-400 ">
     <div className=" h-52 mb-10">
       <figure ><img src={photo} className="w-96 h-60 " alt="Brands"/></figure>
     </div>

  <div className="">
   <h1>{brandName}</h1>
     <p>{shortD}</p>
  </div>
</div>
<button onClick={handleAddtoCart} className='bg-sky-700 p-3 rounded-lg text-white'   >Add to Curt</button>
  </div>
 );
};

export default ProductDetailCard;