import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
