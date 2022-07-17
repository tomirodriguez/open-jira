import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  isAddingEntry: boolean;
  isDraggingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isAddingEntry: false,
  isDraggingEntry: false,
};

export const UIProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const startAddingEntry = () => {
    dispatch({ type: '[UI] - Adding Entry' });
  };

  const stopAddingEntry = () => {
    dispatch({ type: '[UI] - Stop Adding Entry' });
  };

  const startDraggingEntry = () => {
    dispatch({ type: '[UI] - isDragging', payload: true });
  };

  const stopDraggingEntry = () => {
    dispatch({ type: '[UI] - isDragging', payload: false });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        startAddingEntry,
        stopAddingEntry,
        stopDraggingEntry,
        startDraggingEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
