import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // 파일 변경
    return (
        <Box display='flex' justifyContent='center' alignItems='center'>
            <header style={{ width: '75vw', display: 'flex', justifyContent: 'space-between',alignItems: 'center', gap: '4rem', backgroundColor: '#fefefe', height: '6rem', }}>
                <span>
                    <Link to='/'>
                        <img src='/ampm_logo.png' alt='로고'style={{width: '300px'}}/>
                    </Link>
                </span>
                <Box sx={{ display: 'flex', gap: '12rem', fontWeight: '700', fontSize: '1.5rem', width: '20vw'}}>
                    <Link to='/product' style={{textDecoration: 'none', color:'black'}}>제품</Link>
                    <Link to='/inquiry' style={{textDecoration: 'none', color:'black'}}>문의 남기기</Link>
                </Box>
                <Box display='flex'> 
                    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='1rem'>
                        <img src='/Instargram.png' alt='인스타 로고'style={{width: '2rem'}}/>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='1rem'>
                        <a href='https://www.youtube.com/@ampmglobal' >
                            <img src='/yt_icon_rgb.png' alt='유튜브 로고' style={{width: '3rem'}}/>
                        </a>
                    </Box>
                </Box>
            </header>
        </Box>
    );
};

export default Header;