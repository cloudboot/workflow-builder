import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ReactNode, useState } from 'react';

const inputFontSize = {
  fontSize: '12px',
};

const options = ['foo', 'bar'];

const EditJumpContent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Box>
      <Typography variant="caption">Jump</Typography>
      <Autocomplete
        options={options}
        getOptionLabel={(option: string) => option}
        style={inputFontSize}
        renderInput={(params: AutocompleteRenderInputParams) => {
          const inputProps = { ...params.InputProps, style: inputFontSize };
          return (
            <TextField
              {...(params as unknown as ReactNode)}
              InputProps={inputProps}
            />
          );
        }}
        renderOption={(props, option: string) => {
          return (
            <li {...props}>
              <Typography style={inputFontSize}>{option}</Typography>
            </li>
          );
        }}
        inputValue={inputValue}
        onInputChange={(ev, val) => setInputValue(val)}
        size="small"
        freeSolo
      />
    </Box>
  );
};

export default EditJumpContent;
