import React from 'react';
import useTypesafeActionsTodoActions from '../hooks/useTypesafeActionsTodoActions';
import {Todo} from '../modules/typesafeActionsTodos';
import './TodoItem.css';

type MethodChainingTodoItemProps = {
  todo: Todo;
};

function TypesafeActionsTodoItem({todo}: MethodChainingTodoItemProps) {
  const {onToggle, onRemove} = useTypesafeActionsTodoActions(todo.id);

  return (
    <li className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className={'text'} onClick={onToggle}>{todo.text}</span>
      <span className={'remove'} onClick={onRemove}>(X)</span>
    </li>
  );
}

TypesafeActionsTodoItem.defaultProps = {};

export default TypesafeActionsTodoItem;
