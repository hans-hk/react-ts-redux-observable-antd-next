import React, {createContext, useState} from 'react';
import Hansbar from './Hansbar';

export type HansbarContextValue = {
  value: number;
  setValue(value: number): void;
};

const HansbarContext = createContext<HansbarContextValue>({
  value: 0,
  setValue: (): void => {},
});

export const HansbarProvider: React.FC<{}> = ({children}) => {
  const [value, setValue] = useState(0);

  return (
    <HansbarContext.Provider
      value={{
        value,
        setValue: setValue,
      }}
    >
      <Hansbar />
      {children}
    </HansbarContext.Provider>
  );
};

export default HansbarContext;
