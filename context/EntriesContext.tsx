import { createContext } from 'react';
import { Entry } from '../types';

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);
