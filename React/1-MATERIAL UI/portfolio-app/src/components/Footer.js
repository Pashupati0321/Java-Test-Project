// Footer.js
import React from 'react';
import { Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Made with ❤️ by '}
        <Link color="inherit" href="https://yourwebsite.com">
          Your Name
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </Container>
  );
};

export default Footer;
