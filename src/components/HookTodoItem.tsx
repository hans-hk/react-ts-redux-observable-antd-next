import React from 'react';
import useTodoActions from '../hooks/useTodoActions';
import {Todo} from '../modules/todos';
import './TodoItem.css';

type HookTodoItemProps = {
  todo: Todo;
};

function HookTodoItem({todo}: HookTodoItemProps) {
  // TODO: 커스텀 hook 사용하여 수정, 삭제
  const {onToggle, onRemove} = useTodoActions(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className={'text'} onClick={onToggle}>{todo.text}</span>
      <span className={'remove'} onClick={onRemove}>(X)</span>
    </li>
  );
}

HookTodoItem.defaultProps = {};

export default HookTodoItem;
