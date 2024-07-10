// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import backgroundImage from '../assets/background.jpg'; // Replace with your image

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
          My Portfolio
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
