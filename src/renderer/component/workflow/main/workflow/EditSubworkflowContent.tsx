import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Button,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, useEffect, useState, KeyboardEvent } from 'react';
import { Add } from '@mui/icons-material';
import { inputFontSize, inputFontStyle } from '../../styles';
import { IWorkflowRenderModel } from '../../../../model/renderModel';
import { IKeyValuePair } from '../../../../model/common';
import { selectVariables } from '../../../../store/selector';
import { rootStore } from '../../../../store/rootStore';
import { IVariable } from '../../../../model/variable';

interface IEditSubworkflowProps {
  data: IWorkflowRenderModel;
}

const EditSubworkflowContent: FC<IEditSubworkflowProps> = ({
  data,
}: IEditSubworkflowProps) => {
  const [name, setName] = useState('');
  const [params, setParams] = useState([] as IKeyValuePair[]);
  const [newParam, setNewParam] = useState({} as IKeyValuePair);
  const [newParamPrompt, setNewParamPrompt] = useState(false);
  const [paramOptions, setParamOptions] = useState([] as IVariable[]);

  useEffect(() => {
    setParamOptions(selectVariables(rootStore.getState(), data.id));
  }, [data.id]);

  const addNewParam = (_param: IKeyValuePair) => {
    setNewParam(_param);
    setNewParamPrompt(true);
  };

  const applyNewParam = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setParams([...params, newParam]);
      setNewParamPrompt(false);
    }
  };

  return (
    <Stack>
      <TextField
        label="Name"
        size="small"
        InputProps={inputFontStyle}
        InputLabelProps={inputFontStyle}
        value={data.name}
        onChange={(ev) => setName(ev.target.value)}
      />
      {params.map((param, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Stack direction="row" key={`workflow-param${index}`} spacing={1}>
            <Typography variant="caption">param</Typography>
            <Typography variant="body2">{param.key}</Typography>
            <Typography variant="caption">default</Typography>
            <Typography variant="body2">
              {param.value ? param.value : '-'}
            </Typography>
          </Stack>
        );
      })}
      {newParamPrompt ? (
        <Stack>
          <Autocomplete
            options={paramOptions.map((elem) => elem.key)}
            getOptionLabel={(option: string) => option}
            style={inputFontSize}
            renderInput={(_params: AutocompleteRenderInputParams) => {
              const inputProps = {
                ..._params.InputProps,
                style: inputFontSize,
              };
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <TextField {..._params} InputProps={inputProps} />;
            }}
            renderOption={(props, option: string) => {
              return (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <li {...props}>
                  <Typography style={inputFontSize}>{option}</Typography>
                </li>
              );
            }}
            inputValue={newParam.key}
            onInputChange={(ev, val) => setNewParam({ ...newParam, key: val })}
            size="small"
            freeSolo
          />
          <TextField
            size="small"
            label="Default value"
            InputProps={inputFontStyle}
            InputLabelProps={inputFontStyle}
            value={newParam.value}
            onChange={(ev) =>
              setNewParam({ ...newParam, value: ev.target.value })
            }
            onKeyDown={applyNewParam}
          />
        </Stack>
      ) : (
        <Button
          size="small"
          aria-label="Add param"
          startIcon={<Add />}
          onClick={() => {
            addNewParam({ key: '', value: '' });
          }}
        />
      )}
    </Stack>
  );
};

export default EditSubworkflowContent;
