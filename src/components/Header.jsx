import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // 파일 변경
    return (
        <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', backgroundColor: '#fefefe', height: '6rem'}}>
            <span>
                <img src='/ampm_logo.png' alt='로고'style={{width: '300px'}}/>
            </span>
            <Box sx={{ display: 'flex', gap: '4rem', fontWeight: '700', fontSize: '1.5rem'}}>
                <Link to='/brand' style={{textDecoration: 'none', color: '#000'}}>브랜드</Link>
                <Link to='/product' style={{textDecoration: 'none'}}>제품</Link>
                <Link to='/inquiry' style={{textDecoration: 'none'}}>문의 남기기</Link>
            </Box>
            <Box>
                <img src='/Instargram.png' alt='인스타 로고'style={{width: '2rem'}}/>
                <img src='/yt_icon_rgb.png' alt='유튜브 로고' style={{width: '3rem'}}/>
            </Box>
        </header>
    );
};

export default Header;