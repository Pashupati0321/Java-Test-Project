// Projects.js
import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import projectImage from '../assets/project.jpg'; // Replace with your image

const Projects = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h2" sx={{ mt: 4 }}>Projects</Typography>
      <Card sx={{ maxWidth: 345, mt: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={projectImage}
          alt="Project Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Project Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Project Description. Add colorful and engaging text here.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Projects;
