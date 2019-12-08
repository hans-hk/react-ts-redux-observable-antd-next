import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../modules/typesafeActionsTodos';

export default function useTypesafeActionsAddTodo() {
  const dispatch = useDispatch();
  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}
