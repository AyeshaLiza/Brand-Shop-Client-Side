import {  Link, NavLink } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../../firebase/AuthProvider";
import logo from '../assets/logo.jpg'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Routes/PrivateRoute/AuthProvider";
import darkMode from '../assets/darkMode.png'
import { useTheme } from "./Hooks/UseThene";


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
const {changeTheme, mode} = useTheme()

const handleLogout = () =>{
  logOut()
  .then()
  
}


 const navLinks =<>
<li>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Home
</NavLink>
</li>

<li> <NavLink
  to="/addproduct"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Add Product
</NavLink>
</li>



 <li><NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Login
</NavLink>
  </li>
  
<li>
<NavLink
  to="/cart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  My Cart
</NavLink>  
</li>
 
</>

 return (
  <div className="w-[90%] mx-auto">
    <div className="navbar h-28 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
<div className="mr-5 w-16 h-14">
 <img src={logo} alt="" />
</div>
<h1 className="text-4xl font-semibold text-sky-500">technoLiz</h1>         
  </div>
  <div className="navbar-center hidden lg:flex">
    
    <ul className="menu menu-horizontal px-1">
   {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <button onClick={changeTheme} className="w-8"><img src={darkMode} alt="" /></button>
   
  {
      user ? <>
       <div>
      <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" />
      <p>{user.displayName}
      </p> 
        </div>
    <button onClick={handleLogout} className="btn bg-blue-600">Logout</button> 
    
    </>  : <Link to={"/login"}>
      <button className="btn bg-blue-900 text-white">Login</button>
    </Link>
    }
   
  </div>
</div>
      </div>
 );
};

export default Navbar;