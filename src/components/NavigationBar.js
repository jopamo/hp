import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My React Website
        </Typography>
        <Button color="inherit" component={Link} to="/">
          About Me
        </Button>
        <Button color="inherit" component={Link} to="/hobbies-pets">
          Hobbies/Pets
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
