import { Link } from "react-router-dom";

const BrandCard = ({brands}) => {
 const {id, image, availability,  brandName} = brands || []
 
 return (
  <div>
   
    <Link to={`/brandproduts/${brandName}`}>
    <div className="card rounded-lg bg-base-100 ">
     
       <div  className="relative"><img src={image} className="w-96 h-60" alt="Brands"/></div>

    
  
        {
          availability && <h1 className="absolute  text-center text-white text-xl max-w-md font-semibold">{availability}</h1>
        }
    <h2 className="card-title absolute left-6 bottom-5 text-center text-white text-2xl font-semibold ">{brandName}</h2>
 
  
</div>
</Link>
  </div>
 );
};

export default BrandCard;