import { createContext } from 'react';
import { Entry } from '../../types';

interface ContextProps {
  entries: Entry[];
  addNewEntry: (entry: Entry) => void;
  updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
