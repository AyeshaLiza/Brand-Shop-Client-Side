import React from 'react';
import calender from '../../assets/icon/calender.png'
import Group35 from '../../assets/icon/Group35.png'
import Group34 from '../../assets/icon/Group34.png'
const Contact = () => {
 return (
  <div className='bg-black text-white h-60 py-24 rounded-lg'>
    <div className='flex justify-around items-center'>
     <div className='flex gap-5'>
      <img src={calender} alt="" />
      <div>
      <h1>   We are open monday-friday</h1>
      <h1>7:00 am - 9:00 pm</h1>
      </div>
     </div>
     <div className='flex gap-5'>
      <img src={Group34} alt="" />
      <div>
      <h1>Have a question?</h1>

      <h1>
      +2546 251 2658
      </h1>
      </div>
     </div>
     <div className='flex gap-5'>
      <img src={Group35} alt="" />
      <div>
      <h1>Need a repair? our address</h1>
      <h1>Liza Street, New York</h1>
      </div>
     </div>
    </div>
  </div>
 );
};

export default Contact;