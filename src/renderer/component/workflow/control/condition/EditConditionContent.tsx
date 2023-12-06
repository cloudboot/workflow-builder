import {
  Box,
  Button,
  Divider,
  FormControl, IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import { FC, PropsWithChildren, useState } from 'react';
import { buttonIconSize, inputFontSize, inputFontStyle } from '../../styles';
import { ICondition } from '../../../../model/condition';


const conditionTypes = [
  'Return',
  'Next',
  'Raise',
  'Call'
];

const EditConditionContent = () => {
  const [condition, setCondition] = useState({});
  const [conditions, setConditions] = useState([]);

  const pushCondition = (condition: ICondition) => {
    setConditions([...conditions, condition]);
  }

  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant="caption">Switch</Typography>
        <Stack spacing={3}>
          {conditions.map((element, index) => {
            return <Stack key={`condition-${index}`} spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2">{index + 1}</Typography>
                <Divider sx={{width: "80%"}}/>
                <IconButton size="small"><Delete sx={buttonIconSize}/></IconButton>
              </Stack>
              <TextField size="small" label="Condition" InputProps={inputFontStyle} InputLabelProps={inputFontStyle} value={element.condition}></TextField>
              <Stack direction="row" spacing={1}>
                <FormControl>
                  <InputLabel id="condition-type-label">Type</InputLabel>
                  <Select labelId="condition-type-label" label="Type" size="small" value={element.type} sx={inputFontSize}>
                    {conditionTypes.map(_type => {
                      return <MenuItem key={`condition-option-${_type}`} value={_type} sx={inputFontSize}>{_type}</MenuItem>
                    })}
                  </Select>
                </FormControl>
                <TextField label="Value" size="small" InputProps={inputFontStyle} InputLabelProps={inputFontStyle} value={element.value}></TextField>
              </Stack>
            </Stack>
          })}
        </Stack>
        <Button size='small' aria-label='Add header' startIcon={<Add />} onClick={() => {pushCondition({condition: "", type: "Next", value: ""})}}></Button>
      </Stack>
    </Box>
  )
}

export default EditConditionContent;
