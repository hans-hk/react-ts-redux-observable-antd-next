import {ActionType, createAction, createReducer} from 'typesafe-actions';

// 액션 type
const ADD_TODO = 'typesafe_todos/ADD_TODO' as const;
const TOGGLE_TODO = 'typesafe_todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'typesafe_todos/REMOVE_TODO' as const;

// 액션 생성 함수
export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();

// 액션들의 타입스크립트 타입 선언
const actions = {addTodo, toggleTodo, removeTodo};
type TodosAction = ActionType<typeof actions>;

// 상태를 위한 타입 선언
export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type TodosState = Todo[];

// 초깃값 설정
const initialState: TodosState = [
  {id: 1, text: '타입스크립트 배우기s', done: true},
  {id: 2, text: '타입스크립트와 리덕스 함께 사용해보기', done: true},
  {id: 3, text: '투두리스트 만들기', done: false},
];

const typesafeActionsTodos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, {payload: text}) => {
    console.log(state);
    return state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false,
    });
  },
  [TOGGLE_TODO]: (state, {payload: id}) =>
    state.map(todo => (todo.id === id ? {...todo, done: !todo.done} : todo)),
  [REMOVE_TODO]: (state, {payload: id}) =>
    state.filter(todo => todo.id !== id),
});

export default typesafeActionsTodos;
