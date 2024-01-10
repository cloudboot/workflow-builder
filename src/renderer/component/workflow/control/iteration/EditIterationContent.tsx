import { IconButton, Stack, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';

const EditIterationContent = ({data}: any) => {
  return (
    <Stack>
      <TextField id="iteration-step-name" label="Step name" />
      <TextField id="loop-variable-name" label="Loop variable name" />
      <TextField id="range" label="Range" />
      <IconButton>
        <Add />
      </IconButton>
    </Stack>
  );
};

export default EditIterationContent;
