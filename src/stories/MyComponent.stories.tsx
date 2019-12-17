import {decorate} from '@storybook/addon-actions';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import React from 'react';
import MyComponent from '../components/MyComponent';

const pick = decorate([args => [args[0].nativeEvent]]);
const firstArg = decorate([args => args.slice(0, 1)]);

export default {
  title: 'components|basic/MyComponent', //어떤 컴포넌트를 문서화 할지 명시
  component: MyComponent, //스토리북에서 보여질 그룹과 경로를 명시
  decorators: [withKnobs], //에드온 적용
  parameters: {
    componentSubtitle: '하이 난 부제목',
  },
};

export const hello = () => {
  const big = boolean('big', false);
  const name = text('name', 'Storybook');

  return (
    <MyComponent
      name={name}
      big={big}
      onHello={pick.action('onHello')}
      onBye={firstArg.action('onBye')}
    />
  );
};

hello.story = {
  name: 'hello',
};

export const myComponent = () => <MyComponent name="Storybook" />;
export const big = () => <MyComponent name="storybook" big />;

myComponent.story = {
  name: 'Default',
};
