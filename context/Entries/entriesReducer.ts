import { Entry } from '../../types';
import { EntriesState } from './';

type EntriesActionType =
  | { type: '[Entry] - Add-Entry'; payload: Entry }
  | { type: '[Entry] - Update Entry'; payload: Entry }
  | { type: '[Entry] - Load Entries'; payload: Entry[] };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case '[Entry] - Update Entry':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) return action.payload;
          return entry;
        }),
      };

    case '[Entry] - Load Entries':
      return {
        ...state,
        entries: [...action.payload],
      };

    default:
      return state;
  }
};
