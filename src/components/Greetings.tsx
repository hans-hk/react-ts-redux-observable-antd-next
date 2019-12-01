import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

function Greetings({name, mark, optional, onClick}: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <div className="App">
      Hello {name} {mark}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};
export default Greetings;
