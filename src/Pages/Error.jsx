import { useRouteError } from "react-router-dom";
const Error = () => {
 const error = useRouteError();

 return (
  <div className='h-screen  text-center text-4xl text-black'>
   
      {
       error.status === 404 && <h1 className='text-xl p-5'>404 <br /> page not found </h1>
      }
      
    
  </div>
 );
};

export default Error;