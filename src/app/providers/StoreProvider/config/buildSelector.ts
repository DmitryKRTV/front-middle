import { useSelector } from 'react-redux';
import { StateSchema } from '../config/StateSchema';

type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>];

export const buildSelector = <T>(selector: Selector<T>): Result<T> => {
    const useSelectorHook = () => {
        return useSelector(selector);
    };
    return [useSelectorHook, selector];
};
