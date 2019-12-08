import React from 'react';
import useTypesafeActionsTodos from '../hooks/useTypesafeActionsTodos';
import {Todo} from '../modules/todos';
import TypesafeActionsTodoItem from './TypesafeActionsTodoItem';

function TypesafeActionsTodoList() {
  const todos: Todo[] = useTypesafeActionsTodos(); //TODO: 커스텀 hook 사용하여 조회

  if (todos.length === 0) return (<p>등록된 항목이 없음</p>);
  return (
    <ul>
      {
        todos.map(todo => (
          <TypesafeActionsTodoItem todo={todo} key={todo.id}/>
        ))
      }
    </ul>
  );
}

TypesafeActionsTodoList.defaultProps = {};

export default TypesafeActionsTodoList;
