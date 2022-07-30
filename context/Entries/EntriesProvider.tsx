import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { entriesApi } from '../../services';
import { Entry } from '../../types';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Add-Entry', payload: entry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Update Entry', payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');

    dispatch({ type: '[Entry] - Load Entries', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
