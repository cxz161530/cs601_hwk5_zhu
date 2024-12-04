import React, { useEffect, useState } from 'react';
import InventoryItem from './inventoryItem';
import inventoryData from '../inventory.json';
import './inventory.css';

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    setInventory(inventoryData);
  }, []);
  console.log(inventory)

  return (
    <div className="inventory-list">
      {inventory.map((item) => (
        <InventoryItem
          key={item.sku}
          sku={item.sku}
          name={item.name}
          qty={item.qty}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default InventoryList;
