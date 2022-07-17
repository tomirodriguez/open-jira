import { UIState } from './';

type UIActionType =
  | { type: '[UI] - Adding Entry' }
  | { type: '[UI] - Stop Adding Entry' }
  | { type: '[UI] - isDragging'; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - Adding Entry':
      return {
        ...state,
        isAddingEntry: true,
      };
    case '[UI] - Stop Adding Entry':
      return {
        ...state,
        isAddingEntry: false,
      };
    case '[UI] - isDragging':
      return {
        ...state,
        isDraggingEntry: action.payload,
      };

    default:
      return state;
  }
};
