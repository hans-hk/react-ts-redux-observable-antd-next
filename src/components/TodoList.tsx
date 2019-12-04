import React from 'react';
import {useTodosState} from '../contexts/TodosContext';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useTodosState();
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
