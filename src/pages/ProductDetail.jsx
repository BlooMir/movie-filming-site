
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import itemData from "./data.json";
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const product = itemData.find((item) => item.id === parseInt(id));
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const togglePopup1 = () => setIsPopup1Open(!isPopup1Open);
  const togglePopup2 = () => setIsPopup2Open(!isPopup2Open);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    
    <div style={{ width: '75vw', display: 'flex', justifyContent: 'center', padding: '20px', gap: '1rem' }}>
        <div style={{ flex: 1, textAlign: 'center', gap: '2rem'}}>
          <img 
            src={product.img} 
            alt={product.title} 
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover', borderRadius: '1rem'}} 
          />
        </div>
      <div style={{ flex: 1, padding: '20px'}}>
        <Typography variant='h3' fontWeight='700'>{product.title}</Typography>
        <Typography variant='h4'>{product.Money}</Typography>
        <Typography variant='h10'>{product.description}</Typography>
        <br/>
        <div style={{margin: '1rem 1rem'}}/>
        <Box display='flex' gap='1rem'>
          <Button variant="contained" onClick={togglePopup1}>장바구니</Button>
          <Button variant="contained" onClick={togglePopup2}>구매</Button>
        </Box>
      </div>
    


      {isPopup1Open && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <h2>장바구니에 담겼습니다.</h2>
            <Button onClick={togglePopup1}>닫기</Button>
          </div>
        </div>
      )}

      {isPopup2Open && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
          <h2>구매 되셨습니다.</h2>
            <Button onClick={togglePopup2}>닫기</Button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};


const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const popupContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '40px',
  fontWeight: 'bold',
  margin : '30px 0'
};

const subtitleStyle = {
  fontSize: '20px',
  margin: '30px 0',
};


export default ProductDetail;
