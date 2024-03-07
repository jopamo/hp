import React from 'react';
import PropTypes from 'prop-types';

const HobbyPet = ({ title, description, imgSrc }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <img src={imgSrc} alt={`Image of ${title}`} />
  </div>
);

HobbyPet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default HobbyPet;
