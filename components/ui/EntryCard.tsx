import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { Entry } from '../../types/entry';

type Props = {
  entry: Entry;
};

export const EntryCard: FC<Props> = ({ entry }) => {
  const { description } = entry;

  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{description}</Typography>
        </CardContent>
        <CardActions>
          <Typography variant="body2"></Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
