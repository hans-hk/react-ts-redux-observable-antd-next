import {createAction, createReducer} from 'typesafe-actions';

export const increase = createAction('counter/INCREASE')();
export const decrease = createAction('counter/DECREASE')();
export const increseBy = createAction('counter/INCREASE_BY')<number>();

type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const methodChainingCounter = createReducer<CounterState>(initialState)
  .handleAction(increase, (state: CounterState) => ({count: state.count + 1}))
  .handleAction(decrease, (state: CounterState) => ({count: state.count - 1}))
  .handleAction(increseBy, (state: CounterState, action: any) => ({
    count: state.count + action.payload,
  }));

export default methodChainingCounter
