import { Link } from 'react-router-dom';

const BrandProductCard = ({ product }) => {
  const {_id, photo, name, brandName, type, availability, price, rating } = product
  return (
    <div>

      <div className="card lg:w-[500px] md:w-96 w-80   mx-auto  bg-gray-400 shadow-2xl rounded-2xl">

        <div className='relative'>
          <img className=' lg:w-[500px] md:w-96 w-80 h-80' src={photo} alt="Apple Product" />

          {availability && <h1 className='absolute top-4 right-0 p-2 rounded-lg bg-black text-white'>{availability}</h1>
          }
          <h1 className='absolute text-white bg-black top-0 left-0 p-2 rounded-lg'>{brandName}</h1>
        </div>
        <div className="card-body">
          <div className='flex justify-between'>
            <h1 className='text-xl text-Black'>{name}</h1>
            <div className='flex gap-2 '>
            <h1>{type}</h1>
            <h1>{price}</h1>
            </div>
          </div>

          <div className=" card-actions justify-between">
          <Link to={`/productdetail/${_id}`}>
          <button className="btn btn-outline">Details</button>
          </Link>
          <h1>{rating}</h1>

          <Link to={`/update/${_id}`}>
      <button className="btn btn-outline">Update</button>
      </Link>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductCard;