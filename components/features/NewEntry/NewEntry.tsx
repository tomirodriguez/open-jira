import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, FC, useState, useContext } from 'react';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { EntriesContext } from '../../../context/EntriesContext';

type Props = {};

export const NewEntry: FC<Props> = ({}) => {
  const { addNewEntry } = useContext(EntriesContext);
  const [isAdding, setIsAdding] = useState(false);
  const [entryDescription, setEntryDescription] = useState('');
  const [touched, setTouched] = useState(false);

  const toggleAdding = () => {
    setIsAdding(!isAdding);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setEntryDescription(event.target.value);
  };

  const resetForm = () => {
    setIsAdding(false);
    setTouched(false);
    setEntryDescription('');
  };

  const onSave = () => {
    if (entryDescription.length === 0) return;

    addNewEntry(entryDescription);
    resetForm();
  };

  const hasError = entryDescription.length <= 0 && touched;

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva entrada"
            autoFocus
            multiline
            label="Nueva entrada"
            helperText={hasError && 'Ingrese una tarea'}
            error={hasError}
            value={entryDescription}
            onChange={handleInputChange}
          ></TextField>

          <Box display="flex" justifyContent={'space-between'}>
            <Button variant="text" onClick={resetForm}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddIcon />}
          fullWidth
          variant="outlined"
          onClick={toggleAdding}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
