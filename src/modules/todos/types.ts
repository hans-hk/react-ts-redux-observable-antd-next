// 액션들의 타입스크립트 타입 선언
import {ActionType} from 'typesafe-actions';
import {addTodo, removeTodo, toggleTodo} from './actions';

const actions = {addTodo, toggleTodo, removeTodo};
export type TodosAction = ActionType<typeof actions>;

// 상태를 위한 타입 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
