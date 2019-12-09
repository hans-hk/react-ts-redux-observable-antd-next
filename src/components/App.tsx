import React from 'react';
import TodoInsert from './todos/TodoInsert';
import TodoList from './todos/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoInsert/>
      <TodoList/>
    </div>
  );
};

export default App;
