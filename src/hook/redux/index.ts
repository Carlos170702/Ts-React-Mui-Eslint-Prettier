import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook
} from 'react-redux';
import { type TypeDispatch, type TypeReducer } from 'store/store';

export const useCustomDispatch: () => TypeDispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<TypeReducer> = useSelector;
