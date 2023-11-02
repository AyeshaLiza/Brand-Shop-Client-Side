import Banner from "../Components/Banner";
import Category from "../Components/Category";
import Discount from "../Components/Discount";
import FeaturedBrands from "../Components/FeaturedBrands";
// import MyProducts from "../Components/MyProducts";

const Home = () => {
 return (
  <div>
   <div>
   <Banner></Banner>
   <FeaturedBrands></FeaturedBrands>
   <Discount></Discount>
   <Category></Category>
   </div>
  </div>
 );
};

export default Home;