import { createContext } from 'react';
import { Entry } from '../types';

interface ContextProps {
  entries: Entry[];
}

export const EntriesContext = createContext({} as ContextProps);
