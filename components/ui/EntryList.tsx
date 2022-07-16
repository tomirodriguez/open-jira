import { List, Paper } from '@mui/material';
import { FC } from 'react';
import { Entry } from '../../types';
import { EntryCard } from './EntryCard';

type Props = {
  entries: Entry[];
};

export const EntryList: FC<Props> = ({ entries }) => {
  return (
    <div style={{ height: '100%' }}>
      <Paper
        sx={{
          height: '100%',
          backgroundColor: 'transparent',
          padding: 2,
        }}
      >
        <List
          sx={{
            height: '100%',
          }}
        >
          {entries.map((entry) => (
            <EntryCard entry={entry} key={entry._id} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
