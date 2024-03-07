import React from 'react';
import HobbiesPets from '../pages/HobbiesPets';
import HobbyPet from '../components/HobbyPet';

const mockHobbiesOrPets = [
  { id: 'hobby1', title: 'Hobby 1', description: 'Description for Hobby 1', imgSrc: 'https://via.placeholder.com/150' },
  { id: 'hobby2', title: 'Hobby 2', description: 'Description for Hobby 2', imgSrc: 'https://via.placeholder.com/150' },
];

const HobbiesPetsWrapper = ({ hobbiesOrPets }) => {
  return (
    <div>
      <h1>Hobbies/Pets</h1>
      {hobbiesOrPets.map((item) => (
        <HobbyPet key={item.id} {...item} />
      ))}
    </div>
  );
};

export default {
  title: 'Pages/HobbiesPets',
  component: HobbiesPetsWrapper,

};

const Template = (args) => <HobbiesPetsWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  hobbiesOrPets: mockHobbiesOrPets,
};
