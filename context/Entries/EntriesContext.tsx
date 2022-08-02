import { createContext } from 'react';
import { UpdateEntryProps } from '.';
import { Entry } from '../../types';

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (props: UpdateEntryProps) => Promise<{ error: string }>;
}

export const EntriesContext = createContext({} as ContextProps);
