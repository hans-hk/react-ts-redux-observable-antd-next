import {createAction} from 'typesafe-actions';

// 액션 type
export const ADD_TODO = 'modules_todos/ADD_TODO' as const;
export const TOGGLE_TODO = 'modules_todos/TOGGLE_TODO' as const;
export const REMOVE_TODO = 'modules_todos/REMOVE_TODO' as const;

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();
