import { Stack } from '@mui/material';
import SubworkflowComponent from './workflow/main/Subworkflow';
import StepComponent from './workflow/main/Step';
import { StepType } from '../model/stepType';
import ViewCallContent from './workflow/control/call/ViewCallContent';
import { HttpRequestMethod } from '../model/httpRequestMethod';
import { CallType } from '../model/call';
import EditCallContent from './workflow/control/call/EditCallContent';
import EditJumpContent from './workflow/control/jump/EditJumpContent';
import EditConditionContent from './workflow/control/condition/EditConditionContent';

const viewerStyle = {
  minWidth: '21%'
};

const EditorPanel = () => {
  return (
    <Stack sx={viewerStyle}>
      <EditCallContent/>
      <EditJumpContent/>
      <EditConditionContent/>
    </Stack>
  );
};

export default EditorPanel;
