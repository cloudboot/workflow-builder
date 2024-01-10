import {
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, useEffect, useState, KeyboardEvent } from 'react';
import { Add, Delete } from '@mui/icons-material';
import { inputFontStyle, xsSvg } from '../../styles';
import { IWorkflowRenderModel } from '../../../../model/renderModel';
import { IKeyValuePair } from '../../../../model/common';

interface IEditSubworkflowProps {
  data: IWorkflowRenderModel;
}

const EditSubworkflowContent: FC<IEditSubworkflowProps> = ({
  data,
}: IEditSubworkflowProps) => {
  const [workflowName, setWorkflowName] = useState('');
  const [params, setParams] = useState([] as IKeyValuePair[]);
  const [newParam, setNewParam] = useState({} as IKeyValuePair);
  const [newParamPrompt, setNewParamPrompt] = useState(false);

  useEffect(() => {
    setParams(data.params);
    setWorkflowName(data.name);
  }, [data.params, data.name]);

  const addNewParam = (_param: IKeyValuePair) => {
    setNewParam(_param);
    setNewParamPrompt(true);
  };

  const removeParam = (param: IKeyValuePair) => {
    setParams(params.filter((elem) => elem.key !== param.key));
  };

  const applyNewParam = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (newParam.key && !params.some((elem) => elem.key === newParam.key)) {
        setParams([...params, newParam]);
      }
      setNewParamPrompt(false);
    }
  };

  return (
    <Stack spacing={3}>
      <TextField
        size="small"
        label="Workflow name"
        InputProps={inputFontStyle}
        InputLabelProps={inputFontStyle}
        value={workflowName}
        onChange={(ev) => setWorkflowName(ev.target.value)}
      />

      <Stack spacing={1}>
        <Stack direction="column">
          <Typography variant="caption">Params</Typography>
          <Divider />
        </Stack>
        {params.map((param, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Stack
              direction="row"
              key={`workflow-param${index}`}
              spacing={2}
              alignContent="center"
            >
              <Stack>
                <Typography variant="caption">param</Typography>
                <Typography variant="body2">{param.key}</Typography>
              </Stack>
              <Stack>
                <Typography variant="caption">default</Typography>
                <Typography variant="body2">
                  {param.value ? param.value : 'n/a'}
                </Typography>
              </Stack>
              <Stack>
                <IconButton onClick={() => removeParam(param)}>
                  <Delete sx={xsSvg} color="error" />
                </IconButton>
              </Stack>
            </Stack>
          );
        })}
        {newParamPrompt ? (
          <Stack direction="column" spacing={1}>
            <TextField
              size="small"
              label="Param name"
              InputProps={inputFontStyle}
              InputLabelProps={inputFontStyle}
              value={newParam.key}
              onChange={(ev) =>
                setNewParam({ ...newParam, key: ev.target.value })
              }
              onKeyDown={applyNewParam}
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
    </Stack>
  );
};

export default EditSubworkflowContent;
