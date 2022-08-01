import { createContext } from 'react';
import { UpdateEntryProps } from '.';
import { Entry } from '../../types';
import { EntryStatus } from '../../types/entry';

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: ({ description, status }: UpdateEntryProps) => void;
}

export const EntriesContext = createContext({} as ContextProps);
