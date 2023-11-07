import Swal from 'sweetalert2'
import { getStorage, ref, uploadBytes } from "firebase/storage";


const AddProduct = () => {
  const handleForm = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const availability = form.availability.value;
    const discount = form.discount.value;
    const shortD = form.shortD.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const newProduct = { name, discount, brandName, type, price, shortD, availability,  rating, photo }
    console.log(newProduct);
    

    // send to the server
    fetch('https://server-two-gules.vercel.app/product', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
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
      <div className="bg-pink-300 py-10 px-28">
        <h1 className='text-4xl text-pink-600 text-center font-bold '>Add a Product</h1>
        <form onSubmit={handleForm}>
          {/* form row-1 */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">

                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">

                <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
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
              <input type="text" placeholder="type" name="type" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">

                <input type="text" placeholder="price" name="price" className="input input-bordered w-full" />
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

                <input type="text" name="rating" placeholder="rate us" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Available Now?</span>
              </label>
              <label className="input-group">

                <input type="text" name="availability" placeholder="is it available now" className="input input-bordered w-full" />
              </label>
            </div>
            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Discount</span>
              </label>
              <label className="input-group">

                <input type="text" name="discount" placeholder="discount amount" className="input input-bordered w-full" />
              </label>
            </div>

            <div className="form-control md:w-2/3 mx-auto">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">

               
                <textarea name="shortD" id="" cols="60" placeholder='write brief' rows="3"></textarea>
              </label>
            </div>
          </div>

          <div className="form-control w-full mx-auto">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">

              <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" />
            </label>
          </div>
          <input className="mt-5 btn btn-block" type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;