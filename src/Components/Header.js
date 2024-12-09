import React from 'react';
import Logo from '../Logo.png';
import Navbar from './navbar'


const Header = () => {
  return (
    <header >
        <img src={Logo} alt="Store Logo" className="logo" />
        <h1>Local Grocery Store</h1>
        <Navbar/>

      </header>
  );
};

export default Header;
