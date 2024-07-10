// About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h2" sx={{ mt: 4 }}>About Me</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Insert your bio and description here.
      </Typography>
    </Container>
  );
};

export default About;
