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
    <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
      <Card sx={{ width: '100%' }}>
        {title && <CardHeader title={title} />}
        <NewEntry />
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
      </Card>
    </Grid>
  );
};
