import { Stack } from '@mui/material';
import SubworkflowComponent from './workflow/main/Subworkflow';
import StepComponent from './workflow/main/Step';
import { StepType } from '../model/stepType';
import ViewCallContent from './workflow/contol/call/ViewCallContent';
import { HttpRequestMethod } from '../model/httpRequestMethod';
import { CallType } from '../model/call';
import EditCallContent from './workflow/contol/call/EditCallContent';
import EditJumpContent from './workflow/contol/jump/EditJumpContent';

const viewerStyle = {
  minWidth: '21%'
};

const EditorPanel = () => {
  return (
    <Stack sx={viewerStyle}>
      <EditCallContent/>
      <EditJumpContent/>
    </Stack>
  );
};

export default EditorPanel;
