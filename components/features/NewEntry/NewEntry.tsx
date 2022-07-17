import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveIcon from '@mui/icons-material/SaveOutlined';

type Props = {};

export const NewEntry: FC<Props> = ({}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [touched, setTouched] = useState(false);

  const toggleAdding = () => {
    setIsAdding(!isAdding);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const onSave = () => {
    if (newTask.length === 0) return;
  };

  const hasError = newTask.length <= 0 && touched;

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
            value={newTask}
            onChange={handleInputChange}
            onBlur={() => setTouched(true)}
          ></TextField>

          <Box display="flex" justifyContent={'space-between'}>
            <Button variant="text" onClick={toggleAdding}>
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
