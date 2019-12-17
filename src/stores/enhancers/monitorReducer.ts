import {AnyAction, Reducer, Store} from 'redux';

type StoreCreator<S> = (
  reducer: Reducer<S>,
  initialState: S,
  enhancer?: StrictStoreEnhancer<S, S>,
) => Store<S>;

type StrictStoreEnhancer<S, R> = (createStore: StoreCreator<S>) => StoreCreator<R>;

const round = (number: number) => Math.round(number * 100) / 100;

const monitorReducersEnhancer = <S>(next: StoreCreator<S>) => (
  reducer: Reducer<S>,
  initialState: S,
  enhancer?: StrictStoreEnhancer<S, S>,
): Store<S> => {
  const monitoredReducer = (state: any, action: AnyAction) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = round(end - start);

    console.log('reducer process time:', diff);

    return newState;
  };

  return next(monitoredReducer, initialState, enhancer);
};

export default monitorReducersEnhancer;
