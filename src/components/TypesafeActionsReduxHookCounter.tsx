import React from 'react';
import {increase, decrease, increseBy} from '../modules/typesafeCounter';

function TypeSafeActionsReduxHookCounter() {

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={() => increseBy(5)}>+5</button>
    </div>
  );
}

export default TypeSafeActionsReduxHookCounter;
