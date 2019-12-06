import React from 'react';

type ReduxCounterPropTypes = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function ReduxCounter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: ReduxCounterPropTypes) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

ReduxCounter.defaultProps = {};

export default ReduxCounter;
