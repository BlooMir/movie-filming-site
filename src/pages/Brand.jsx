import { Box } from '@mui/material';
import React from 'react';
import LolemIpsuim from '../components/LolemIpsuim';

const Brand = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '800px', gap: '5rem'}}>
            <LolemIpsuim/>
            <LolemIpsuim/>
        </Box>
    );
};

export default Brand;