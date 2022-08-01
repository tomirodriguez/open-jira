import { Card, CardHeader, Grid, List, Paper } from '@mui/material';
import { DragEvent, FC, useContext } from 'react';
import { EntriesContext } from '../../context/Entries';
import { UIContext } from '../../context/UI';
import { Entry, EntryStatus } from '../../types';
import { EntryCard, NewEntry } from '../ui';

type Props = {
  title?: string;
  entries: Entry[];
  status: EntryStatus;
  showAddEntry?: boolean;
};

export const EntryList: FC<Props> = ({
  title,
  entries,
  status,
  showAddEntry = false,
}) => {
  const {
    updateEntry,
    entries: allEntries,
    addNewEntry,
  } = useContext(EntriesContext);
  const { isDraggingEntry, stopDraggingEntry } = useContext(UIContext);

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData('entry');

    const entry = allEntries.find((e) => e._id === id);

    if (entry) {
      const { _id, description } = entry;

      updateEntry({ _id, description, status });
    }

    stopDraggingEntry();
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleEntrySaved = (description: string) => {
    addNewEntry(description);
  };

  return (
    <Grid item xs={12} sm={4} display="flex">
      <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {title && <CardHeader title={title} />}
        {showAddEntry && <NewEntry onEntrySaved={handleEntrySaved} />}
        <div
          style={{ flexGrow: 1, height: 'calc(100vh - 250px)' }}
          onDrop={onDropEntry}
          onDragOver={allowDrop}
        >
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
                opacity: isDraggingEntry ? 0.3 : 1,
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
