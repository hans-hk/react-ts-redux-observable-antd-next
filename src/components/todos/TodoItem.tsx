import React from 'react';
import useTodoActions from '../../hooks/useTodoActions';
import {Todo} from '../../modules/todos';

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({todo}: TodoItemProps) {
  // hook 이용하여 토글, 삭제 액션 적용
  const {onRemove, onToggle} = useTodoActions(todo.id);

  return (
    <li>
      <span className={'text'} onClick={onToggle}>
        {todo.text}
      </span>
      <span className={'remove'} onClick={onRemove}>
        {' '}
        (X){' '}
      </span>
      <span className={'done'} onClick={onRemove}>
        {String(todo.done)}
      </span>
    </li>
  );
}

export default TodoItem;
