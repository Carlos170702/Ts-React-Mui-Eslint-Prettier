import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook
} from 'react-redux';
import { type TypeDispatch, type TypeSelector } from 'store/store';

// esto es un customHook que hace el tipado de el useSelector usando la
// exportacion de el tipo de dato que esta en el store al igual que useDispatch
export const useCustomDispatch: () => TypeDispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<TypeSelector> =
  useSelector;
