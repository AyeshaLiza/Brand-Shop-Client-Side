import Banner from "../Components/Banner";
import Contact from "../Components/Contact/ContactUs";
import FeaturedBrands from "../Components/FeaturedBrands";
import Category from "../Components/Category";

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