import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import TodoPage from '../pages/TodoPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/todo" component={TodoPage} />
    </Switch>
  );
};

export default App;
