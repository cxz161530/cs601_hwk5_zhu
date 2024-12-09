import React from 'react';
import { useParams, Link } from 'react-router-dom';
import inventoryData from '../../inventory.json';
import './inventoryDetail.css';

const InventoryDetail = () => {
  const { sku } = useParams();
  const item = inventoryData.find((i) => i.sku === sku);
  console.log(item)

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="card">
    <div className="card-image">
      {item.image && <img src={item.image} alt={item.name} className="item-image" />}
    </div>
    
    <div className="card-content">
      <h1>{item.name}</h1>
      <p className="sku">SKU: {item.sku}</p>
      <p className="qty">Quantity: {item.qty}</p>
      <p className="price">Price: ${item.price}</p>
      {item.Description && <p className="description">{item.Description}</p>}
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  </div>
  );
};

export default InventoryDetail;
