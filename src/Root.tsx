import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import App from './components/App';
import rootReducer from './modules';

const store = createStore(rootReducer);

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <App/>
      </Provider>
    </BrowserRouter>
  );
};

export default Root;
