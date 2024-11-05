import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import itemData from "./data.json";

const Product = () => {
  return (
    <div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(90deg); }
            50% { transform: rotate(180deg); }
            75% { transform: rotate(270deg); }
            100% { transform: rotate(360deg); }
          }
          .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 0.5s linear infinite;
          }
        `}
      </style>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}>
        <h1>상품 목록</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {itemData.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ item }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ margin: '20px', border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
      <Link to={`/product/${item.id}`}>
        <div style={{ position: 'relative', width: '600px', height: '300px' }}>
          {loading && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="spinner"></div>
            </div>
          )}
          <img 
            src={item.img} 
            alt={item.title} 
            style={{ display: loading ? 'none' : 'block', width: '100%', height: '100%', objectFit: 'cover' }} 
            onLoad={handleImageLoad} 
          />
        </div>
      </Link>
      <p style={titleStyle}>{item.title}</p>
      <p style={subtitleStyle}>{item.Money}</p>
    </div>
  );
};
const titleStyle = {
  fontSize: '25px',
  fontWeight: 'bold',
  margin : '20px 0'
};

const subtitleStyle = {
  fontSize: '20px',
};

export default Product;
