import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { DragEvent, FC, useContext } from 'react';
import { Entry } from '../../types/entry';
import { UIContext } from '../../context/UI';
import Link from 'next/link';
import { getFormatDistanceToNow } from '../../utils/dateFunctions';

type Props = {
  entry: Entry;
};

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description } = entry;
  const { stopDraggingEntry, startDraggingEntry } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData('entry', entry._id);
    startDraggingEntry();
  };

  return (
    <Link href={`/entries/${entry._id}`}>
      <Card
        sx={{ marginBottom: 1 }}
        draggable
        onDragStart={onDragStart}
        onDragEnd={stopDraggingEntry}
      >
        <CardActionArea>
          <CardContent>
            <Typography sx={{ whiteSpace: 'pre-line' }}>
              {description}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'right' }}>
            <Typography variant="body2">
              Hace {getFormatDistanceToNow(entry.createdAt)}
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </Link>
  );
};
