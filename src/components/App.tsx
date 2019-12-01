import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerCounter from './ReducerCounter';

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
    </div>
  );
};

export default App;
