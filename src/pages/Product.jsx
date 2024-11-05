import React from 'react';
import { Link } from 'react-router-dom';
import itemData from "./data.json"

const Product = () => {
  return (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
      
      <h1>상품 목록</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {itemData.map((item) => (
          <div key={item.id} style={{ margin: '20px', border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <Link to={`/product/${item.id}`}>
              <img src={item.img} alt={item.title} style={{ width: '600px', height: '300px', objectFit: 'cover' }} />
            </Link>
            <h2>{item.title}</h2>
            <p>{item.Money}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Product;
