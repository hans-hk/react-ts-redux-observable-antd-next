import React from 'react';
import TodoInsert from '../components/todos/TodoInsert';
import TodoList from '../components/todos/TodoList';
import TodoObjectInsert from '../components/todos/TodoObjectInsert';

type TodoPageProps = {};

function TodoPage() {
  return (
    <>
      <TodoInsert />
      <TodoObjectInsert />
      <TodoList />
    </>
  );
}

TodoPage.defaultProps = {};

export default TodoPage;
