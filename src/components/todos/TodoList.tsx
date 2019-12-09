import React from 'react';
import useTodos from '../../hooks/useTodos';
import {Todo} from '../../modules/todos';
import TodoItem from './TodoItem';

function TodoList() {
  // hook 이용하여 조회
  const todos: Todo[] = useTodos();

  if (todos.length === 0) return <p>등록된 항목이 없음</p>;

  return (
    <ul>
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
