import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {HansbarProvider} from '../libs/hansbar/HansbarContext';
import MainPage from '../pages/MainPage';
import TodoPage from '../pages/TodoPage';

const App: React.FC = () => {
  return (
    <HansbarProvider>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/todo" component={TodoPage} />
      </Switch>
    </HansbarProvider>
  );
};

export default App;
