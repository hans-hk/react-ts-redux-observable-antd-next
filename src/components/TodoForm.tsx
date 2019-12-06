import React, {useState} from 'react';
import {useTodosDispatch} from '../contexts/TodosContext';

type TodoFormDefaultProps = {
  name: string;
  mark: string;
}

function TodoForm({name, mark}: TodoFormDefaultProps) {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      ohmyod {name} {mark}
      <input value={value}
             placeholder={'무엇을 하실 건가용'}
             onChange={e => setValue(e.target.value)}/>
      <button>등록</button>
    </form>
  );
}

TodoForm.defaultProps = {
  name: 'hans',
  mark: '!',
};

export default TodoForm;
