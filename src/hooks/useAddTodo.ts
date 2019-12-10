import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo, addTodoObject} from '../modules/todos';

export function useAddTodoObject() {
  const dispatch = useDispatch();
  return useCallback(object => dispatch(addTodoObject(object)), [dispatch]);
}

export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}
