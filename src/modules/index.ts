import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
import typeSafeCounter from './typesafeCounter';
import typesafeActionsTodos from './typesafeActionsTodos';

const rootReducer = combineReducers({
  typeSafeCounter,
  typesafeActionsTodos,
  counter,
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
