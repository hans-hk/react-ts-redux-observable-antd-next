import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import configureStore from './configureStore';

const store = configureStore({});

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
