import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartCard = ({cart, dltCart, setDltCart}) => {
 const { _id, photo, brandName, shortD} =cart || []
 // const object = {photo, brandName, shortD}
 // // console.log(object);
 const handleDelete = (_id) =>{
// console.log(_id);
Swal.fire({
 title: 'Are you sure?',
 text: "You won't be able to revert this!",
 icon: 'warning',
 showCancelButton: true,
 confirmButtonColor: '#3085d6',
 cancelButtonColor: '#d33',
 confirmButtonText: 'Yes, delete it!'
}).then((result) => {

 if (result.isConfirmed) {
console.log('deleted');
  fetch(`https://brand-shop-theta.vercel.app/cart/${_id}`, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data);
   if (data.deletedCount > 0) {
     Swal.fire(
    'Deleted!',
    'Your coffee has been deleted.',
    'success'
  ) 
  const remaining = dltCart.filter(cart => cart._id !== _id);
  setDltCart(remaining)
   }
  }
  )
}

}
)

 }
 return (
  <div>
     <div className="card h-96 mx-auto  card-compact  bg-gray-100 shadow-xl">
  <figure><img src={photo}alt="photo" className='min-h-96' /></figure>
  <div className="card-body">
    <h2 className="card-title">{brandName}</h2>
    <p>{shortD}</p>
    <div className="card-actions justify-end">
      <button onClick={() =>{handleDelete(_id)} } className="btn btn-primary">Delete</button>
     
    </div>
  </div>
</div>
  </div>
 );
};

export default CartCard;