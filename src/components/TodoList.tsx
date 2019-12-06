import React, {useReducer, useState} from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  const [reducerCount, dispatch] = useReducer(reducer, 0);
  const onReducerIncrease = () => dispatch({type: 'INCREASE'});
  const onReducerDecrease = () => dispatch({type: 'DECREASE'});

  return (
    <div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
      <hr/>
      <h1>reducerCount: {reducerCount}</h1>
      <div>
        <button onClick={onReducerIncrease}>+1</button>
        <button onClick={onReducerDecrease}>-1</button>
      </div>
      <hr/>
    </div>
  );
}

export default Counter;
