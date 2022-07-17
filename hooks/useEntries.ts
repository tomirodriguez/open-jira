import { useContext } from 'react';
import { EntriesContext } from '../context/Entries/EntriesContext';

export const useEntries = () => {
  const { entries } = useContext(EntriesContext);

  return {
    pending: entries.filter((entry) => entry.status === 'pending'),
    inProgress: entries.filter((entry) => entry.status === 'in-progress'),
    finished: entries.filter((entry) => entry.status === 'finished'),
  };
};
