import React from 'react';
import HobbyPet from '../components/HobbyPet';

const hobbiesOrPets = [
  { id: 'hobby1', title: 'Hobby 1', description: 'Description for Hobby 1', imgSrc: 'path/to/image1.png' },
];

const HobbiesPets = () => {
  return (
    <div>
      <h1>Hobbies/Pets</h1>
      {hobbiesOrPets.map((hobbyOrPet, index) => (
        <HobbyPet
          key={hobbyOrPet.id || index}
          title={hobbyOrPet.title}
          description={hobbyOrPet.description}
          imgSrc={hobbyOrPet.imgSrc}
        />
      ))}
    </div>
  );
};

export default HobbiesPets;
