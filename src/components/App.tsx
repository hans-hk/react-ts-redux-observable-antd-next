import React from 'react';
import CounterContainer from '../containers/CounterContianer';
import {TodosContextProvider} from '../contexts/TodosContext';
import Counter from './Counter';
import Greetings from './Greetings';
import HookTodoInsert from './HookTodoInsert';
import HookTodoList from './HookTodoList';
import TypesafeActionsTodoInsert from './TypesafeActionsTodoInsert';
import TypesafeActionsTodoList from './TypesafeActionsTodoList';
import MyForm from './MyForm';
import ReducerCounter from './ReducerCounter';
import ReduxHookCounter from './ReduxHookCounter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TypeSafeActionsReduxHookCounter from './TypesafeActionsReduxHookCounter';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };

  const onSubmit = (form: { name: string; description: string; }) => {
    console.log(form);
  };

  return (
    <div className="App">
      App
      <Greetings onClick={onClick} name={'hans'} mark={'!'}/>
      <Counter/>
      <ReducerCounter/>
      <MyForm onSubmit={onSubmit}/>
      <hr/>
      <TodosContextProvider>
        <TodoForm/>
        <TodoList/>
      </TodosContextProvider>
      <hr/>
      <CounterContainer/>
      <ReduxHookCounter/>
      <hr/>
      <h2>Hook을 이용한 todo</h2>
      <HookTodoInsert/>
      <HookTodoList/>
      <hr/>
      <TypeSafeActionsReduxHookCounter/>
      <hr/>
      <h2>Method Chaining, typesafe-actions 을 이용한 todo</h2>
      <TypesafeActionsTodoInsert/>
      <TypesafeActionsTodoList/>
    </div>
  );
};

export default App;
