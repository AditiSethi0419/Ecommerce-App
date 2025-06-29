// src/components/LocationSelect.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LocationSelect = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #ccc',
        px: 2,
        py: 0.5,
        borderRadius: 1,
        cursor: 'pointer',
      }}
    >
      <LocationOnIcon fontSize="small" />
      <Typography variant="body2" sx={{ ml: 1, color: 'green' }}>
        All
      </Typography>
      <ArrowDropDownIcon />
    </Box>
  );
};

export default LocationSelect;
