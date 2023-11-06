import React from 'react';
import images from '../assets/slider/images.jpg'
import bannerx from '../assets/bannerx.webp'
const Category = () => {
 return (

<div className='mx-auto'>
<div className="hero bg-cover"
 style={{backgroundImage: `url('https://i.ibb.co/rdX70wc/catgBG.jpg')`} }
>
  {/* <img  src={bannerx} alt="" /> */}
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-3xl space-y-3 ">
      <h1 className='text-4xl text-black font-bold'>What you are Looking For?</h1>
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered bg-blue-100 w-96 rounded-xl md:w-auto text-white" />
    </div>

     <div className='space-x-5 space-y-3'>
     <button className="btn btn-glass rounded-3xl">Phone</button>
      <button className="btn btn-glass rounded-3xl">AirPods </button>
      <button className="btn btn-glass rounded-3xl">PlayStation Gaming Console </button>
      <button className="btn btn-glass rounded-3xl">MacBook</button>
      <button className="btn btn-glass rounded-3xl">Computer</button>
      <button className="btn btn-glass rounded-3xl">Laptop</button>
      <button className="btn btn-glass rounded-3xl">Micro Processor</button>
      <button className="btn btn-glass rounded-3xl">iPhone</button>
      <button className="btn btn-glass rounded-3xl">ThermoStat </button>
      <button className="btn btn-glass rounded-3xl">Camera</button>
      <button className="btn btn-glass rounded-3xl">Gaming Processor</button>
      <button className="btn btn-glass rounded-3xl">Camera</button>
      <button className="btn btn-glass rounded-3xl">iPad</button>
      <button className="btn btn-glass rounded-3xl">Speaker</button>
      <button className="btn btn-glass rounded-3xl">Watch</button>
      <button className="btn btn-glass rounded-3xl">Music Player</button>
      <button className="btn btn-glass rounded-3xl">Pixel Buds Pro</button>
      <button className="btn btn-glass rounded-3xl">Pixel Buds Pro</button>
      <button className="btn btn-glass rounded-3xl">Mouse</button>
      <button className="btn btn-glass rounded-3xl">keyBoard</button>
      <button className="btn btn-glass rounded-3xl">Remote Camera</button>
      <button className="btn btn-glass rounded-3xl">Television</button>
     </div>
    </div>
  </div>
</div>
</div>


 );
};

export default Category;