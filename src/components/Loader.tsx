import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress style={{ position: 'fixed', top: 0, left: 0 }} />
    </Box>
  );
};

export default Loading;
