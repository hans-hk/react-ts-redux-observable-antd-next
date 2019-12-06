import React from 'react';
import CounterContainer from '../containers/CounterContianer';
import {TodosContextProvider} from '../contexts/TodosContext';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerCounter from './ReducerCounter';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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
    </div>
  );
};

export default App;
