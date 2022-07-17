import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';
import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, FC, useContext, useState } from 'react';
import { EntriesContext } from '../../context/Entries';

type Props = {
  onEntrySaved: (description: string) => void;
};

export const NewEntry: FC<Props> = ({ onEntrySaved }) => {
  const [isAddingEntry, setIsAddingEntry] = useState(false);

  const [entryDescription, setEntryDescription] = useState('');
  const [touched, setTouched] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
    setEntryDescription(event.target.value);
  };

  const resetForm = () => {
    setIsAddingEntry(false);
    setTouched(false);
    setEntryDescription('');
  };

  const onSave = () => {
    setTouched(true);
    if (entryDescription.length === 0) return;

    onEntrySaved(entryDescription);
    resetForm();
  };

  const hasError = entryDescription.length <= 0 && touched;

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
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
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
