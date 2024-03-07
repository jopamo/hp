import React from 'react';
import AboutMe from '../pages/AboutMe';

export default {
  title: 'Pages/AboutMe',
  component: AboutMe,
};

const Template = (args) => <AboutMe {...args} />;

export const Default = Template.bind({});
