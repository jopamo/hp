import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/NavigationBar',
  component: NavigationBar,
  decorators: [(Story) => <BrowserRouter>{Story()}</BrowserRouter>],
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
