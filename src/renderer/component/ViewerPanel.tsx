import { Stack } from '@mui/material';
import SubworkflowComponent from './workflow/main/Subworkflow';
import StepComponent from './workflow/main/Step';
import { StepType } from '../model/stepType';
import ViewCallContent from './workflow/control/call/ViewCallContent';
import { HttpRequestMethod } from '../model/httpRequestMethod';
import { CallType } from '../model/call';
import { ReactNode } from 'react';
import ViewJumpContent from './workflow/control/jump/ViewJumpContent';
import ViewConditionContent from './workflow/control/condition/ViewConditionContent';

const viewerStyle = {
  minWidth: '60%'
};

const ViewerPanel = () => {
  return (
    <Stack sx={viewerStyle}>
      <SubworkflowComponent name='main' args={[{ key: 'foo', defaultValue: 'bar' }]}>
        <StepComponent name='call_reservation_ep' type={StepType.InvokeHttpEndpoint}>
          <Stack direction="column" spacing={1}>
            <ViewCallContent data={{
              call: CallType.HttpRequest,
              args: {
                url: "https://localhost:8080",
                method: HttpRequestMethod.Get
              },
              result: 'response'
            }} />
            <ViewJumpContent step="next_step"></ViewJumpContent>
            <ViewConditionContent></ViewConditionContent>
          </Stack>
        </StepComponent>
      </SubworkflowComponent>
    </Stack>
  );
};

export default ViewerPanel;
