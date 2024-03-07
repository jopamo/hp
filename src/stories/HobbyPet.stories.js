import React from 'react';
import PropTypes from 'prop-types';
import HobbyPet from '../components/HobbyPet';

export default {
  title: 'Components/HobbyPet',
  component: HobbyPet,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imgSrc: { control: 'text' },
  },
};

const Template = (args) => <HobbyPet {...args} />;

export const SampleHobbyPet = Template.bind({});
SampleHobbyPet.args = {
  title: 'Sample Hobby or Pet',
  description: 'This is a detailed description of the hobby or pet.',
  imgSrc: 'https://via.placeholder.com/150',
};
