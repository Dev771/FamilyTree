import React from 'react';

import Applogo from '../../public/img/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div>
          <img src={Applogo} alt='AppLogo' />
        </div>
        <div className='d-flex gap-3'>
          <a href='/' className='active'>Home</a>
          <a href='/'>Services</a>
          <a href='/'>Form</a>
          <a href='/'>Contact Us</a>
        </div>
        <div className='d-flex gap-1 align-items-center'>
          <i class="fa fa-regular fa-moon p-2 moon-icon"></i>
          <div className='profile d-flex gap-2 align-items-center'>
            <img src='https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' alt='profile pic' />
            <i class="fa fa-regular fa-angle-down"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar