import { FC, PropsWithChildren, useReducer } from 'react';
import { ENTRIES_MOCK } from '../mocks';
import { Entry } from '../types';
import { EntriesContext, entriesReducer } from './';
import { v4 as uuid } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: ENTRIES_MOCK,
};

export const EntriesProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid(),
      description,
      createdAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
