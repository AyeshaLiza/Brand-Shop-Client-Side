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
      0
    </div>
  );
};

export default AddProduct;