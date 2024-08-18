// src/AboutUs.js
import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Paper elevation={3} padding={2}>
        <Typography variant="h4">About Us</Typography>
        <Typography variant="body1">
          This application helps you calculate the calories burnt during your exercises.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
