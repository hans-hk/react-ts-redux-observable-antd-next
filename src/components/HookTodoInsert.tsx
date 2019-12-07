import React, {ChangeEvent, FormEvent, useState} from 'react';
import useAddTodo from '../hooks/useAddTodo';

type HookTodoInsertPropTypes = {};

function HookTodoInsert() {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const addTodo = useAddTodo();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: 커스텀 Hook 사용해서 새 항목 등록
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder={'할일을 입력'}
        value={value}
        onChange={onChange}/>
        <button type="submit">등록</button>
    </form>
  );
}

HookTodoInsert.defaultProps = {};

export default HookTodoInsert;
