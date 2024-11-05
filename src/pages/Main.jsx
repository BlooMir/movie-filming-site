import { Box } from '@mui/material';
import React from 'react';
import Brand from '../components/Brand';

const Main = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
            <Box sx={{width: '100vw', height: '40vh', display: 'flex', justifyContent: 'center', backgroundColor: '#efefef'}}>
                <img alt='main img' src='/ampm_Lobby.png' style={{objectFit: 'cover'}}/>
            </Box>
            <Brand/>
        </Box>
    );
};

export default Main;