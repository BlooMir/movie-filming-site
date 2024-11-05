import { Box, FormControl,TextField, Typography } from '@mui/material';
import React from 'react';

const Question = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', gap: '10rem', height: '1000px', backgroundColor: '#fefefe'}}>
            {/* 문의 남기기 텍스트 */}
            <Typography variant='h3' fontWeight={700}>문의 남기기</Typography>

            {/* 폼 컨트롤 */}
            <FormControl style={{ gap: '24px' , width: '600px'}}>
                {/* 이름과 주소를 같은 행에 배치 */}
                <Box display="flex" gap="16px">
                    <TextField label="이름" variant="outlined" fullWidth />
                    <TextField label="주소" variant="outlined" fullWidth />
                </Box>
                {/* 휴대폰 번호 필드 */}
                <TextField label="휴대폰 번호" variant="outlined" fullWidth />
                {/* 상세 문의 필드 */}
                <TextField
                    label="상세 문의"
                    variant="outlined"
                    multiline
                    rows={6}
                    fullWidth
                />
            </FormControl>
        </Box>
    );
};

export default Question;