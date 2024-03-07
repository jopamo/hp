import React from 'react';
import './NavigationBar.css';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/" sx={{ marginRight: 2 }}>
          About Me
        </Button>
        <Button color="inherit" component={RouterLink} to="/hobbies-pets">
          Hobbies/Pets
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
