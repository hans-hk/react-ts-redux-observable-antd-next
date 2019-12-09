import React from 'react';
import {render} from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

const renderApp = () =>
  render(
    <Root/>,
    document.getElementById('root'),
  );

// @ts-ignore
if (process.env.NODE_ENV !== 'production' && module.hot) {
  // @ts-ignore
  module.hot.accept('./components/App', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
