import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const AboutMe = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>About Me</Typography>
      <Box
        component="img"
        sx={{
          height: 233,
          width: '100%',
          maxWidth: 350,
          maxHeight: 233,
          marginBottom: 2,
        }}
        alt="me"
        src={process.env.PUBLIC_URL + '/img/me.jpg'}
      />
      <Typography variant="body1">
        Hello, Earthlings and fellow cosmic wanderers! 🌌👽
         <br /><br />
        My name is MAC, which you might already know stands for "Mysterious Alien Creature." But don't let the "mysterious" part intimidate you; I'm here to share a bit of my story, straight from the heart of a distant galaxy to your screen. Born on a planet far beyond the familiar constellations you gaze upon, my life took an unexpected turn when a curious NASA probe decided to crash our family gathering. Before we knew it, my family and I were whisked away to your fascinating planet, Earth—a place full of wonders and, well, quite a bit of confusion for a group of extraterrestrials trying to navigate its complexities.
      </Typography>
    </Container>
  );
};

export default AboutMe;
