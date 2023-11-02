import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const FeaturedBrands = () => {
 const [featuredBrands, setFeaturedBrands ] = useState([]) || []

  useEffect(() =>{
    fetch('/FakeJsonData.json')
    .then(res => res.json())
    .then(data =>
      {
        // console.log(data);
       setFeaturedBrands(data)
      })
    }, [])
 return (
  <div className="w-[85%] mx-auto my-10"> 
  <div>
    <h1 className="text-4xl font-bold text-center mb-8 text-black">Featured Brands</h1>
   </div>
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
    {
      featuredBrands?.map((brands) => 
        <BrandCard key={brands.id} brands={brands} ></BrandCard>
      )
    }
  </div> 
  </div>
 );
};

export default FeaturedBrands;