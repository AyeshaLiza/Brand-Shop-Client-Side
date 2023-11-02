// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
const [loadedProduct, setLoadedProduct] = useState([])

  const {id} = useParams();
  useEffect(() =>{
    fetch(`http://localhost:4000/product/${id}`)
    .then(res => res.json())
    .then(data => setLoadedProduct(data))
   }, [])

const {_id, photo, name, discount, brandName, type, availability, price, rating } = loadedProduct  || []
const handleUpdateForm = e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const brandName = form.brandName.value;
  const type = form.type.value;
  const price = form.price.value;
  const availability = form.availability.value;
  const discount = form.discount.value;
  const rating = form.rating.value;
  const photo = form.photo.value;

  const updatedProduct = { name, discount, brandName,availability, type, price,rating, photo }
  console.log(updatedProduct);


  // send to the server
  fetch(`http://localhost:4000/product/${_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(updatedProduct)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'success!',
          text: 'Data Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
}

  return (
    <div>
      
    <div>
    <div className="bg-blue-300 py-10 px-28">
        <h1 className='text-4xl text-blue-900 text-center font-bold '>Update a Product</h1>
        <form onSubmit={handleUpdateForm}>
           {/* form row-1 */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">

                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">

                <input type="text" name="brandName" defaultValue={brandName} placeholder="Brand Name" className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* row-2 */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <input type="text" placeholder="type" name="type"  defaultValue={type} className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">

                <input type="text" placeholder="price" name="price" defaultValue={price} className="input input-bordered w-full" />
              </label>
            </div>
          </div>

          {/* row-3 */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">

                <input type="text" name="rating" defaultValue={rating} placeholder="rate us" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Available Now?</span>
              </label>
              <label className="input-group">

                <input type="text" name="availability" defaultValue={availability} placeholder="is it available now" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">discount</span>
              </label>
              <label className="input-group">

                <input type="text" name="discount" defaultValue={discount} placeholder="discount amount" className="input input-bordered w-full" />
              </label>
            </div>


           
          </div>

          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">

              <input type="text"  placeholder="photo url" name="photo" defaultValue={photo} className="input input-bordered w-full" />
            </label>
          </div>
          <input className="mt-5 btn btn-block" type="submit" value="Update Product" />
        </form>
      </div> 
    </div>

    </div>
  );
};

export default Update;