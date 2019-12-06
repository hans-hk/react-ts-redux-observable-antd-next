import React from 'react';
import useCounter from '../hooks/useCounter';

type ReduxCounterPropTypes = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function ReduxHookCounter() {
  const {count, onIncrease, onDecrease, onIncreaseBy}: ReduxCounterPropTypes = useCounter();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default ReduxHookCounter;
