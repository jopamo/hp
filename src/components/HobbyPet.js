import React from 'react';

const HobbyPet = ({ title, description, imgSrc }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imgSrc} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default HobbyPet;
