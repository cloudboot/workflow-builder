import { FC, PropsWithChildren, useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import { CallType, IHttpRequestCallModel } from '../../../../model/call';
import {
  buttonIconSize,
  infoFontStyle,
  inputFontSize,
  inputFontStyle,
} from '../../styles';
import HttpRequestMethod from '../../../../model/httpRequestMethod';

const EditCallContent: FC<PropsWithChildren> = () => {
  const data: IHttpRequestCallModel = {
    call: CallType.HttpRequest,
    args: {
      url: 'google.com',
      headers: [{ key: 'content-type', value: 'application/json' }],
      query: [],
      method: HttpRequestMethod.Get,
    },
  };

  const [addHeaderPrompt, setAddHeaderPrompt] = useState(false);
  const [addQueryPrompt, setAddQueryPrompt] = useState(false);
  const [addBodyPrompt, setAddBodyPrompt] = useState(false);

  const applyHeadersKeyValue = (event: { key: string }) => {
    if (event.key === 'Enter') {
      setAddHeaderPrompt(false);
    }
  };

  const applyQueryKeyValue = (event: { key: string }) => {
    if (event.key === 'Enter') {
      setAddQueryPrompt(false);
    }
  };

  const applyRequestBody = (event: { type: string }) => {
    if (event.type === 'blur') {
      setAddBodyPrompt(false);
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Box component="form">
          <Select sx={inputFontSize} size="small">
            {Object.values(HttpRequestMethod).map((method) => {
              return (
                <MenuItem key={method} sx={inputFontSize} value={method}>
                  {method}
                </MenuItem>
              );
            })}
          </Select>
        </Box>
        <Box component="form">
          <TextField
            id="url"
            InputProps={inputFontStyle}
            InputLabelProps={inputFontStyle}
            label="URL"
            size="small"
          />
        </Box>
      </Stack>

      <Box component="form">
        <TextField
          id="timeout"
          InputProps={inputFontStyle}
          InputLabelProps={inputFontStyle}
          label="Timeout"
          size="small"
          type="number"
        />
      </Box>
      <Box component="form">
        <TextField
          id="result"
          InputProps={inputFontStyle}
          InputLabelProps={inputFontStyle}
          label="Result"
          size="small"
        />
      </Box>
      <Box>
        <Stack spacing={1}>
          <Typography variant="caption">Headers</Typography>
          {data.args.headers?.map((header) => {
            return (
              <Stack
                key={`header-${header.key}`}
                direction="row"
                alignItems="center"
              >
                <Typography sx={infoFontStyle} variant="body2">
                  {header.key}: {header.value}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Stack />
                  <Stack direction="row">
                    <IconButton size="small">
                      <Edit sx={buttonIconSize} />
                    </IconButton>
                    <IconButton size="small">
                      <Delete sx={buttonIconSize} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
          {addHeaderPrompt ? (
            <Stack direction="row" spacing={1}>
              <Box component="form">
                <TextField
                  id="header-key"
                  InputProps={inputFontStyle}
                  InputLabelProps={inputFontStyle}
                  label="Key"
                  size="small"
                >
                  {' '}
                </TextField>
              </Box>
              <Box component="form">
                <TextField
                  id="header-value"
                  InputProps={inputFontStyle}
                  InputLabelProps={inputFontStyle}
                  label="Value"
                  size="small"
                  onKeyDown={applyHeadersKeyValue}
                >
                  {' '}
                </TextField>
              </Box>
            </Stack>
          ) : (
            <Button
              size="small"
              aria-label="Add header"
              startIcon={<Add />}
              onClick={() => {
                setAddHeaderPrompt(true);
              }}
            />
          )}
        </Stack>
      </Box>
      <Box>
        <Stack spacing={1}>
          <Typography variant="caption">Query Parameters</Typography>
          {data.args.query?.map((header) => {
            return (
              <Stack
                key={`query-${header.key}`}
                direction="row"
                alignItems="center"
              >
                <Typography sx={infoFontStyle} variant="body2">
                  {header.key}: {header.value}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Stack />
                  <Stack direction="row">
                    <IconButton size="small">
                      <Edit sx={buttonIconSize} />
                    </IconButton>
                    <IconButton size="small">
                      <Delete sx={buttonIconSize} />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            );
          })}
          {addQueryPrompt ? (
            <Stack direction="row" spacing={1}>
              <Box component="form">
                <TextField
                  id="query-key"
                  InputProps={inputFontStyle}
                  InputLabelProps={inputFontStyle}
                  label="Key"
                  size="small"
                >
                  {' '}
                </TextField>
              </Box>
              <Box component="form">
                <TextField
                  id="query-value"
                  InputProps={inputFontStyle}
                  InputLabelProps={inputFontStyle}
                  label="Value"
                  size="small"
                  onKeyDown={applyQueryKeyValue}
                >
                  {' '}
                </TextField>
              </Box>
            </Stack>
          ) : (
            <Button
              size="small"
              aria-label="Add query param"
              startIcon={<Add />}
              onClick={() => {
                setAddQueryPrompt(true);
              }}
            />
          )}
        </Stack>
      </Box>
      <Box>
        <Stack>
          <Typography variant="caption">Body</Typography>
          {addBodyPrompt ? (
            <TextField
              size="small"
              InputProps={inputFontStyle}
              multiline
              onBlur={applyRequestBody}
            />
          ) : (
            <Button
              size="small"
              aria-label="Add header"
              startIcon={<Add />}
              onClick={() => {
                setAddBodyPrompt(true);
              }}
            />
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default EditCallContent;
