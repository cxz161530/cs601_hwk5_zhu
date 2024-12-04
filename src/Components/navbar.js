import React from 'react';
import './navbar.css';

const navbar = () => {

  return (
    <div >
      <nav>
          <ul className="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#inventory">Inventory</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
    </div>
  );
};

export default navbar;
