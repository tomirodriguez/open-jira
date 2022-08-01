import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { entriesApi } from '../../services';
import { Entry } from '../../types';
import { EntriesContext, entriesReducer, UpdateEntryProps } from './';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });

    dispatch({ type: '[Entry] - Add-Entry', payload: data });
  };

  const updateEntry = async ({
    _id,
    description,
    status,
  }: UpdateEntryProps) => {
    try {
      const { data } = await entriesApi.patch(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: '[Entry] - Update Entry', payload: data });
    } catch (error) {
      console.error(error);
    }
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
