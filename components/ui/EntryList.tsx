import { Card, CardHeader, Grid, List, Paper } from '@mui/material';
import { FC } from 'react';
import { Entry } from '../../types';
import { NewEntry } from '../features';
import { EntryCard } from './EntryCard';

type Props = {
  title?: string;
  entries: Entry[];
};

export const EntryList: FC<Props> = ({ title, entries }) => {
  return (
    <Grid item xs={12} sm={4} display="flex">
      <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {title && <CardHeader title={title} />}
        <NewEntry />
        <div style={{ flexGrow: 1, height: 'calc(100vh - 250px)' }}>
          <Paper
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              padding: 2,
              overflow: 'auto',
            }}
          >
            <List
              sx={{
                height: '100%',
                width: '100%',
              }}
            >
              {entries.map((entry) => (
                <EntryCard entry={entry} key={entry._id} />
              ))}
            </List>
          </Paper>
        </div>
      </Card>
    </Grid>
  );
};
