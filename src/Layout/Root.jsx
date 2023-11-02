import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
// import Home from '../Pages/Home';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
 
 return (
  <div >
  <div>
   <Navbar></Navbar>
   </div>
    <Outlet></Outlet>
    <Footer></Footer>
  </div>
 );
};

export default Root;