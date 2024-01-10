import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import { FC, PropsWithChildren, useState } from 'react';
import { buttonIconSize, inputFontSize, inputFontStyle } from '../../styles';
import { ICondition } from '../../../../model/condition';
import ConditionType from "../../../../model/ConditionType";

function EditConditionContent({data}: any) {
  const [condition, setCondition] = useState({});
  const [conditions, setConditions] = useState([] as ICondition[]);

  const pushCondition = (_condition: ICondition) => {
    setConditions([...conditions, _condition]);
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant="caption">Switch</Typography>
        <Stack spacing={3}>
          {conditions.map((element, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Stack key={`condition-${index}`} spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2">{index + 1}</Typography>
                  <Divider sx={{ width: '80%' }} />
                  <IconButton size="small">
                    <Delete sx={buttonIconSize} />
                  </IconButton>
                </Stack>
                <TextField
                  size="small"
                  label="Condition"
                  InputProps={inputFontStyle}
                  InputLabelProps={inputFontStyle}
                  value={element.condition}
                />
                <Stack direction="row" spacing={1}>
                  <FormControl>
                    <InputLabel id="condition-type-label">Type</InputLabel>
                    <Select
                      labelId="condition-type-label"
                      label="Type"
                      size="small"
                      value={element.type}
                      sx={inputFontSize}
                    >
                      {Object.values(ConditionType).map((_type) => {
                        return (
                          <MenuItem
                            key={`condition-option-${_type}`}
                            value={_type}
                            sx={inputFontSize}
                          >
                            {_type}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <TextField
                    label="Value"
                    size="small"
                    InputProps={inputFontStyle}
                    InputLabelProps={inputFontStyle}
                    value={element.value}
                  />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
        <Button
          size="small"
          aria-label="Add header"
          startIcon={<Add />}
          onClick={() => {
            pushCondition({ condition: '', type: 'Next', value: '' });
          }}
        />
      </Stack>
    </Box>
  );
}

export default EditConditionContent;
