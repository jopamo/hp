import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import HobbiesPets from './pages/HobbiesPets';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/hobbies-pets" element={<HobbiesPets />} />
      </Routes>
    </Router>
  );
}

export default App;
