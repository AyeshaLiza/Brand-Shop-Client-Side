

const Banner = () => {
 return (
  <div>
    <div className="hero h-[500px] bg-no-repeat bg-cover" 
    style={{backgroundImage: 'url(https://i.ibb.co/rdX70wc/catgBG.jpg)'}}
    >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">technoLiz</h1>
      <p className="mb-5">Welcome to TechnoLiz, your ultimate destination for cutting-edge electronic wonders. Explore our curated selection of brand new gadgets and devices, meticulously chosen to elevate your tech experience. Embrace innovation, shop with confidence, and step into a future powered by TechnoLiz.</p>
      <button className="btn btn-info">Shop Now</button>
    </div>
  </div>
</div>
  </div>
 );
};

export default Banner;