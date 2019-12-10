import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useAddTodoObject} from '../../hooks/useAddTodo';

function TodoObjectInsert() {
  const [value, setValue] = useState({text: '', done: false});
  const addTodoObject = useAddTodoObject();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      text: e.target.value,
      done: value.done,
    });
  };

  const onChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      text: value.text,
      done: Boolean(e.target.value),
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValue({text: '', done: false});
    //hook 이용하여 등록 액션 적용
    addTodoObject(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={value.text} placeholder={'할 일을 입력해주세요.'} onChange={onChange} />
      <label className="switch">
        <input type="checkbox" value={String(value.done)} onChange={onChangeCheckBox} />
        <span className="slider" />
      </label>
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoObjectInsert;
