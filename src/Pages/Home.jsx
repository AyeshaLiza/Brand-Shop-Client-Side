import Banner from "../Components/Banner";
import Category from "../Components/Category";
import Contact from "../Components/Contact/ContactUs";
import FeaturedBrands from "../Components/FeaturedBrands";
// import MyProducts from "../Components/MyProducts";

const Home = () => {
 return (
  <div>
   <div>
   <Banner></Banner>
   <FeaturedBrands></FeaturedBrands>
   <Contact></Contact>
   <Category></Category>
   </div>
  </div>
 );
};

export default Home;