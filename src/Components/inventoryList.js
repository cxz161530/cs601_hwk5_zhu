import React, { useEffect, useState } from 'react';
import InventoryItem from './inventoryItem';
import inventoryData from '../inventory.json';
import './inventory.css';
import { useNavigate } from 'react-router-dom';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setInventory(inventoryData);
  }, []);
  console.log(inventory)
  const handleClick = (item) => {
    navigate(`/inventory/${item.sku}`);
  };

  return (
    <>
    <h2>Inventory</h2>
    <div className="inventory-list">
    
      {inventory.map((item) => (
        <div key={item.sku} 
          onClick={() => handleClick(item)} 
          style={{ cursor: 'pointer', padding: '10px',  margin: '5px' }} >
        <InventoryItem
          sku={item.sku}
          name={item.name}
          qty={item.qty}
          price={item.price}
        />
        </div>
      ))}
    </div>
    </>
  );
};

export default InventoryList;
