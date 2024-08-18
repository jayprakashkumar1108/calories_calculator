// src/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Custom styled components
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#6a1b9a', // Purple color
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: '#ffffff', // White color for text
  '&:hover': {
    backgroundColor: '#ff5722', // Orange color for hover
  },
}));

const Navbar = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#ffffff' }}>
          Calorie Calculator
        </Typography>
        <StyledButton component={RouterLink} to="/" color="inherit">
          Home
        </StyledButton>
        <StyledButton component={RouterLink} to="/calculate" color="inherit">
          Check Calories
        </StyledButton>
        <StyledButton component={RouterLink} to="/about" color="inherit">
          About Us
        </StyledButton>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
