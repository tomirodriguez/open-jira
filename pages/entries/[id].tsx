import { DeleteOutlined, SaveOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import {
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { GetServerSideProps } from 'next';
import { useSnackbar } from 'notistack';
import { ChangeEvent, FC, useContext, useMemo, useState } from 'react';
import { Layout } from '../../components/layouts';
import { EntriesContext } from '../../context/Entries';
import { getEntryById } from '../../database';
import { Entry, EntryStatus } from '../../types';
import { getFormatDistanceToNow } from '../../utils';

const VALID_STATUS: EntryStatus[] = ['pending', 'in-progress', 'finished'];

type Props = {
  entry: Entry;
};

const EntryPage: FC<Props> = ({ entry }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { updateEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);

  const hasError = useMemo(
    () => inputValue.trim().length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const handleSaveClicked = async () => {
    setLoading(true);
    const { error } = await updateEntry({
      _id: entry._id,
      description: inputValue,
      status,
    });

    // should be in a context
    !error
      ? enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        })
      : enqueueSnackbar(error, {
          variant: 'error',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });

    setLoading(false);
  };

  return (
    <Layout title={`Open Jira | ${entry.description.substring(0, 20)}...`}>
      <Grid container justifyContent={'center'} marginTop={2}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada: ${entry.description}`}
              subheader={`Creada hace ${getFormatDistanceToNow(
                entry.createdAt
              )}`}
            />
            <CardContent>
              <TextField
                fullWidth
                placeholder="Nueva entrada"
                autoFocus
                multiline
                label="Actualizar entrada"
                sx={{ marginBottom: 1 }}
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={onTextFieldChanged}
                helperText={hasError && 'Ingrese el nombre de la tarea'}
                error={hasError}
              />
              <FormControl>
                <FormLabel>Estado</FormLabel>
                <RadioGroup row onChange={onStatusChanged} value={status}>
                  {VALID_STATUS.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <LoadingButton
                startIcon={<SaveOutlined />}
                variant="contained"
                fullWidth
                onClick={handleSaveClicked}
                disabled={inputValue.trim().length <= 0}
                loading={loading}
              >
                Save
              </LoadingButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.main',
          color: 'white',
          ':hover': {
            backgroundColor: 'error.light',
          },
        }}
      >
        <DeleteOutlined />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
