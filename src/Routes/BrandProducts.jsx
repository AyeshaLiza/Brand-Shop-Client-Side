import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandProductCard from "../Components/BrandProductCard";
import slider1 from '../assets/slider/slider1.jpg'
import slider5 from '../assets/slider/slider5.jpg'
import slider3 from '../assets/slider/slider3.jpg'

const BrandProducts = () => {
  const [products, setProducts] = useState([])
  const [productCard, setProductCard] = useState([])

  //  const products = useLoaderData()
  const {id} = useParams();
  // console.log(id);
 

  useEffect(()=>{
    fetch('https://server-two-gules.vercel.app/product')
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
  },[])
  
  useEffect(() =>{
  const  findProducts = products?.filter((product) => product.brandName == id)
  // console.log(findProducts);
  setProductCard(findProducts)
  },[id, products])

return (
  <div className="w-[90%] mx-auto bg-neutral-100">
    <h1 className="text-center text-black font-bold mb-10 text-4xl">
      Brand New Products
    </h1>
    {/* slider  */}
    <div className=" carousel w-full mx-auto ">
      <div id="slide1" className="carousel-item relative w-full h-96">
        <img src={slider1} className="w-full h-96 relative" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative h-96 w-full">
        <img src={slider5} className="w-full h-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-96">
        <img src={slider3} className="w-full h-96" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div className='absolute max-w-lg mx-auto text-center text-white top-60 left-96'>
        <h1 className=' text-4xl font-bold'> </h1>
      </div>

    </div>


    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-10 shadow-2xl shadow-slate-300">
      {
        productCard?.map((product) => <BrandProductCard key={product._id} product={product}></BrandProductCard>
        )
      }
    </div>

  </div>
);
};

export default BrandProducts