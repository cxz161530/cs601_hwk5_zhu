import React from 'react';
import InventoryList from './Components/inventoryList';
import './App.css';
import Navbar from './Components/navbar';
import Logo from './Logo.jpg';
const App = () => {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Store Logo" className="logo" />
        <h1>Local Grocery Store</h1>
        <Navbar/>

      </header>
      <h2>Inventory</h2>
      <InventoryList />
      <footer>
        <p>&copy; 2024 Grocery Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
