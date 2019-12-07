import React from 'react';
import useTodos from '../hooks/useTodos';
import {Todo} from '../modules/todos';
import HookTodoItem from './HookTodoItem';

type HookTodoListProps = {};

function HookTodoList() {
  const todos: Todo[] = useTodos(); //TODO: 커스텀 hook 사용하여 조회

  if (todos.length === 0) return (<p>등록된 항목이 없음</p>);
  return (
    <ul>
      {
        todos.map(todo => (
          <HookTodoItem todo={todo} key={todo.id}/>
        ))
      }
    </ul>
  );
}

HookTodoList.defaultProps = {};

export default HookTodoList;
