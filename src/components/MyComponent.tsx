import {Button} from 'antd';
import React from 'react';

type MyComponentProps = {
  /** 아무 이름이나 입력해보세요. */
  name: string;
  /** `true`일 경우 h1 */
  big?: boolean;
  /** Hello 버튼 클릭 시 호출되는 함수 */
  onHello?: any;
  /** Bye 버튼 클릭 시 호출되는 함수 */
  onBye?: any;
};

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */
const MyComponent = ({name, big, onHello, onBye}: MyComponentProps) => {
  return (
    <div>
      {big ? <h1>Hello, {name}</h1> : <div>Hello, {name}</div>}
      <div>
        <button onClick={onHello}>hello</button>
        <Button onClick={onBye}>bye</Button>
      </div>
    </div>
  );
};

MyComponent.defaultProps = {
  /** 아무 이름이나 입력해보세요. */
  name: 'Storybook', //her
};
export default MyComponent;
