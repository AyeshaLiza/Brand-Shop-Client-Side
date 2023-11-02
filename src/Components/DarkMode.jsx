import React from 'react';
import sun from '../assets/sun.png'
import Moon from '../assets/Moon.png'


const DarkMode = () => {
 const setDarkMode = () =>{
  document.querySelector("body").setAttribute('data-theme', 'dark')
 }

 const setLightMode = () =>{
  document.querySelector("body").setAttribute('data-theme', 'light')
 }

 const toggleTheme = (e) =>{
  if (e.target.checked) setDarkMode();
  else setLightMode()
 }
 return (
  <div>
   <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle' 
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            <div className='w-20 bg-gray-400 rounded-2xl flex gap-2'>
            <img className='w-8' src={sun} alt="" />
            <img className='w-6' src={Moon} alt="" />
            </div>
                
                
            </label>
        </div>
  </div>
 );
};

export default DarkMode;