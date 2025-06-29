import React from 'react'
import Search from '../Search'
import LocationSelect from '../LocationSelect'
import WishList from '../../pages/Wishlist'
import Cart from '../../pages/Cart'
import Login from '../../pages/Login'
import LOGO from '../../assets/ecom_logo.jpg'
import { Box, Stack,IconButton, Badge, Button, Typography, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <Box sx={{ display: 'flex',  justifyContent: 'space-between', px: 1 , py:0  }}>
     <Box component="img" src={LOGO} alt="logo"  sx={{
    height: 50
  }} />
     <Search/>
     <LocationSelect/>
   

  </Box>
  )
}

export default Header