import { useState } from 'react';

export const UseArrayState = (initState = []) => {
  const [state, setState] = useState(initState);
  const add = (newValue) => {
    setState((currentValue) => [...currentValue, newValue]);
  };
  const remove = (index) => {
    setState((currentState) => {
      const newState = [...currentState];
      newState.splice(index, 1);
      return newState;
    });
  };
  return [state, { add, remove }];
};
