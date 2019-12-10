import React from 'react';
import TodoInsert from './todos/TodoInsert';
import TodoList from './todos/TodoList';
import TodoObjectInsert from './todos/TodoObjectInsert';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoInsert />
      <TodoObjectInsert />
      <TodoList />
    </div>
  );
};

export default App;
