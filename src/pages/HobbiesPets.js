import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import HobbyPet from '../components/HobbyPet';
import './HobbiesPets.css';

const hobbiesOrPets = [
  {
    id: 'interstellarSurfing',
    title: 'Interstellar Surfing',
    description: 'Riding the cosmic waves on nebula crests. It’s like surfing, but with solar winds.',
    imgSrc: process.env.PUBLIC_URL + '/img/1.jpg'
  },
  {
    id: 'cosmicGardening',
    title: 'Cosmic Gardening',
    description: 'Cultivating rare, alien flora that thrive on both sunlight and starlight.',
    imgSrc: process.env.PUBLIC_URL + '/img/2.jpg'
  },
  {
    id: 'earthCuisineTasting',
    title: 'Earth Cuisine Tasting',
    description: 'Exploring Earth’s diverse culinary landscapes, with a soft spot for Skittles and Coca-Cola.',
    imgSrc: process.env.PUBLIC_URL + '/img/3.jpg'
  }
];

const HobbiesPets = () => {
  return (
    <div className="container">
      <Typography variant="h2" component="h1" className="title" gutterBottom>
        Hobbies
      </Typography>
      <Box className="flex-column" sx={{ gap: 4 }}>
        {hobbiesOrPets.map((item) => (
          <HobbyPet key={item.id} {...item} />
        ))}
      </Box>
    </div>
  );
};

export default HobbiesPets;
