import React from 'react';
import MyComponent from '../components/MyComponent';

export default {
  component: 'components|basic/MyComponent',
  title: 'MyComponent',
};

export const myComponent = () => <MyComponent name="Storybook" />;
export const big = () => <MyComponent name="storybook big" />;

myComponent.story = {
  name: 'Default',
};
