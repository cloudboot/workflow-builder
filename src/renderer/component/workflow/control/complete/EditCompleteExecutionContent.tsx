import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { inputFontSize } from '../../styles';
import { ICompleteExecContentProps } from '../../../../model/completeExec';

const execTypes = [
  { type: 'next', displayText: 'End execution' },
  { type: 'return', displayText: 'Return value' },
];

const EditCompleteExecutionContent = ({ data }: ICompleteExecContentProps) => {
  const [selectedOption, setSelectedOption] = useState('next');
  const [returnValue, setReturnValue] = useState('');

  useEffect(() => {
    setSelectedOption(data.content.execType);
    setReturnValue(data.content.execValue);
  }, [data.content.execType, data.content.execValue]);

  return (
    <Stack>
      <FormControl>
        <InputLabel id="exec-type-label">Complete execution</InputLabel>
        <Select
          labelId="exec-type-label"
          label="Complete execution "
          size="small"
          onChange={(event) => {
            setSelectedOption(event.target.value);
          }}
          value={selectedOption}
          sx={inputFontSize}
        >
          {execTypes.map((element) => {
            return (
              <MenuItem
                key={`condition-option-${element.type}`}
                value={element.type}
                sx={inputFontSize}
              >
                {element.displayText}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {selectedOption === 'return' && (
        <Box component="form">
          <TextField
            id="return-value"
            label="Variable"
            size="small"
            value={returnValue}
          />
        </Box>
      )}
    </Stack>
  );
};

export default EditCompleteExecutionContent;
