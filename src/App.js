import React from 'react';
import InventoryList from './Components/inventoryList';
import InventoryDetail from './Components/inventoryDetail/inventoryDetail';
import './App.css';
import Navbar from './Components/navbar';
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom';
import About from './Components/about';
import Contact from './Components/Contact';
const App = () => {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<InventoryList />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inventory/:sku" element={<InventoryDetail />} />
        </Routes>
      
   
      </main>



     
      <footer>
        <p>&copy; 2024 Grocery Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
