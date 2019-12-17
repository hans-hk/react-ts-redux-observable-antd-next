import {createAction} from 'typesafe-actions';
import {Todo} from './types';

// 액션 type
export const ADD_TODO = 'todos/ADD_TODO' as const;
export const ADD_TODO_OBJECT = 'todos/ADD_TODO_OBJECT' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
export const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO)<string>();
export const addTodoObject = createAction(ADD_TODO_OBJECT)<Todo>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
