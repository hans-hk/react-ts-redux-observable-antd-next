import {Button, Input} from 'antd';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import useAddTodo from '../../hooks/useAddTodo';

function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValue('');
    //hook 이용하여 등록 액션 적용
    addTodo(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input value={value} placeholder={'할 일을 입력해주세요.'} onChange={onChange} />
      <button type="submit">등록</button>
      <Button>등록</Button>
    </form>
  );
}

export default TodoInsert;
