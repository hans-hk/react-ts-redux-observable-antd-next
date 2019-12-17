import {applyMiddleware, createStore, Middleware, StoreEnhancer} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../modules';
import monitorReducersEnhancer from './enhancers/monitorReducer';

export default function configureStore(preloadState: Object) {
  const middlewares: Middleware[] = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer] as StoreEnhancer[];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadState, composedEnhancers);

  // @ts-ignore
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    // @ts-ignore
    module.hot.accept('../modules', () => store.replaceReducer(rootReducer));
  }
  return store;
}
