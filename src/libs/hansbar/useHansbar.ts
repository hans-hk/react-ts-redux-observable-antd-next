import {useContext} from 'react';
import HansbarContext from './HansbarContext';

export default function useHansbar() {
  const {value, setValue} = useContext(HansbarContext);
  return [value, setValue] as [typeof value, typeof setValue];
}
