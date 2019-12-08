import {ActionType, createAction, createReducer} from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
// () => ({type: INCREASE})
export const decrease = createAction(DECREASE)();
// () => ({type: DECREASE})
export const increseBy = createAction(INCREASE_BY)<number>();
// (payload: number) => ({type: INCREASE_BY, payload})

const actions = {increase, decrease, increseBy};
type CounterAction = ActionType<typeof actions>;

type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const typeSafeCounter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({count: state.count + 1}),
  [DECREASE]: state => ({count: state.count - 1}),
  [INCREASE_BY]: (state, action) => ({count: state.count + action.payload}),
});

export default typeSafeCounter;

//액션 생성 함수로 넣어주는 파라메터 값과 액션의 페이로드 값이 완벽히 일치하지 않을 경우.
// const createItem = (name: string) => ({type: CREATE_ITEM, payload: {id: nanoid(), name}})
// V4
// const createItem = createAction(CREATE_ITEM).map(name => ({payload: {id: nanoid(), name}}));
// V5
// type Human = {
//   name: string,
// }
// const createItem = createAction(CREATE_ITEM, ({name}: Human) => ({
//   id: 'nanoid',
//   name,
// }));
