import { createContext } from 'react';

interface ContextProps {
  isAddingEntry: boolean;
  isDraggingEntry: boolean;

  startAddingEntry: () => void;
  stopAddingEntry: () => void;
  startDraggingEntry: () => void;
  stopDraggingEntry: () => void;
}

export const UIContext = createContext({} as ContextProps);
