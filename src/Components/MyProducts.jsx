import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const MyProducts = () => {
 const [productCollection, setProductCollection] = useState([]) || []

  useEffect(() =>{
    fetch('http://localhost:4000/product')
    .then(res => res.json())
    .then(data =>
      {
        console.log(data);
       setProductCollection(data)
      })
    }, [])
 return (
  <div>
    <div className='w-3/4 mx-auto  bg-black text-pink-500'
    >
      <h1 className='text-4xl m-5 text-center '>Brand Shop {productCollection.length}</h1>
      <div className='grid grid-cols-3 gap-5'>

      {
          productCollection?.map((product) =>
         
         <ProductCard key={product._id} product={product} products={productCollection} setProducts ={setProductCollection} ></ProductCard>
         
          )
        }
       
      </div>
   
    </div>
  </div>
 );
};

export default MyProducts;