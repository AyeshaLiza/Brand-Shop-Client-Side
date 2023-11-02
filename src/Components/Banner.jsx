import React from 'react';
import banner1 from '../assets/banner1.jpg'

const Banner = () => {
 return (
  <div>
    <div className="hero h-[500px]" style={{backgroundImage:
    'url(https://i.ibb.co/cYZP7TS/banner1.jpg)'
  
   }}>
  <div className="hero-overlay bg-opacity-0"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">technoLiz</h1>
      <p className="mb-5">Welcome to TechnoLiz, your ultimate destination for cutting-edge electronic wonders. Explore our curated selection of brand new gadgets and devices, meticulously chosen to elevate your tech experience. Embrace innovation, shop with confidence, and step into a future powered by TechnoLiz.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default Banner;