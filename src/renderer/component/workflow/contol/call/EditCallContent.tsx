import { FC, PropsWithChildren, useState } from 'react';
import { Box, Button, IconButton, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { HttpRequestMethod } from '../../../../model/httpRequestMethod';
import { Add, Delete, Edit } from '@mui/icons-material';
import { IHttpRequestCallModel } from '../../../../model/call';


const inputFontSize = {
  fontSize: '12px'
};

const infoFontSize = {
  fontSize: '13px'
};

const buttonIconSize = {
  fontSize: '13px'
};

const inputStyle = {
  style: inputFontSize
};

const EditCallContent: FC<PropsWithChildren> = () => {
  const data: IHttpRequestCallModel = {
    call: HttpRequestMethod.Get,
    url: 'google.com',
    args: {
      headers: [
        { key: 'content-type', value: 'application/json' }
      ],
      query: []
    }
  };

  const [addHeaderPrompt, setAddHeaderPrompt] = useState(false);
  const [addQueryPrompt, setAddQueryPrompt] = useState(false);
  const [addBodyPrompt, setAddBodyPrompt] = useState(false);

  const applyHeadersKeyValue = (event) => {
    if (event.key === 'Enter') {
      setAddHeaderPrompt(false);
    }
  };

  const applyQueryKeyValue = (event) => {
    if (event.key === 'Enter') {
      setAddQueryPrompt(false);
    }
  };

  const applyRequestBody = (event) => {
    if (event.type === 'blur') {
      setAddBodyPrompt(false);
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={1}>
        <Box component='form'>
          <Select sx={inputFontSize} size='small'>
            {
              Object.values(HttpRequestMethod).map(method => {
                return <MenuItem key={method} sx={inputFontSize} value={method}>{method}</MenuItem>;
              })
            }
          </Select>
        </Box>
        <Box component='form'>
          <TextField id='url' InputProps={inputStyle} InputLabelProps={inputStyle} label='URL' size='small'></TextField>
        </Box>
      </Stack>

      <Box component='form'>
        <TextField id='timeout' InputProps={inputStyle} InputLabelProps={inputStyle} label='Timeout'
                   size='small' type='number'></TextField>
      </Box>
      <Box component='form'>
        <TextField id='result' InputProps={inputStyle} InputLabelProps={inputStyle} label='Result'
                   size='small'></TextField>
      </Box>
      <Box>
        <Stack spacing={1}>
          <Typography variant='caption'>Headers</Typography>
          {data.args.headers?.map((header) => {
            return <Stack key={`header-${header.key}`} direction='row' alignItems='center'>
              <Typography sx={infoFontSize} variant='body2'>{header.key}: {header.value}</Typography>
              <Stack direction='row' spacing={2}>
                <Stack></Stack>
                <Stack direction='row'>
                  <IconButton size='small'><Edit sx={buttonIconSize} /></IconButton>
                  <IconButton size='small'><Delete sx={buttonIconSize} /></IconButton>
                </Stack>
              </Stack>
            </Stack>;
          })}
          {addHeaderPrompt ?
            <Stack direction='row' spacing={1}>
              <Box component='form'>
                <TextField id='header-key' InputProps={inputStyle} InputLabelProps={inputStyle} label='Key'
                           size='small'> </TextField>
              </Box>
              <Box component='form'>
                <TextField id='header-value' InputProps={inputStyle} InputLabelProps={inputStyle} label='Value'
                           size='small' onKeyDown={applyHeadersKeyValue}> </TextField>
              </Box>
            </Stack> :
            <Button size='small' aria-label='Add header' startIcon={<Add />} onClick={() => {
              setAddHeaderPrompt(true);
            }}></Button>
          }
        </Stack>
      </Box>
      <Box>
        <Stack spacing={1}>
          <Typography variant='caption'>Query Parameters</Typography>
          {data.args.query?.map((header) => {
            return <Stack key={`query-${header.key}`} direction='row' alignItems='center'>
              <Typography sx={infoFontSize} variant='body2'>{header.key}: {header.value}</Typography>
              <Stack direction='row' spacing={2}>
                <Stack></Stack>
                <Stack direction='row'>
                  <IconButton size='small'><Edit sx={buttonIconSize} /></IconButton>
                  <IconButton size='small'><Delete sx={buttonIconSize} /></IconButton>
                </Stack>
              </Stack>
            </Stack>;
          })}
          {addQueryPrompt ?
            <Stack direction='row' spacing={1}>
              <Box component='form'>
                <TextField id='query-key' InputProps={inputStyle} InputLabelProps={inputStyle} label='Key'
                           size='small'> </TextField>
              </Box>
              <Box component='form'>
                <TextField id='query-value' InputProps={inputStyle} InputLabelProps={inputStyle} label='Value'
                           size='small' onKeyDown={applyQueryKeyValue}> </TextField>
              </Box>
            </Stack> :
            <Button size='small' aria-label='Add query param' startIcon={<Add />} onClick={() => {
              setAddQueryPrompt(true);
            }}></Button>
          }
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Typography variant='caption'>Body</Typography>
          {addBodyPrompt ? <TextField size='small' InputProps={inputStyle} multiline onBlur={applyRequestBody}></TextField> :
            <Button size='small' aria-label='Add header' startIcon={<Add />} onClick={() => {
              setAddBodyPrompt(true);
            }}></Button>
          }
        </Stack>
      </Box>
    </Stack>
  );
};

export default EditCallContent;
