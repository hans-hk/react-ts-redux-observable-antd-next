import {useSelector} from 'react-redux';
import {RootState} from '../modules';

export default function useTypesafeActionsTodos() {
  const todos = useSelector((state: RootState) => state.typesafeActionsTodos);
  return todos;
}
