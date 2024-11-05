import { Box } from '@mui/material';
import React from 'react';
import LolemIpsuim from './LolemIpsuim';

const Brand = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '800px', gap: '10rem'}}>
            <LolemIpsuim/>
            <LolemIpsuim/>
        </Box>
    );
};

export default Brand;