import { FC } from 'react';
import { Typography } from '@mui/material';
import { IStepRenderModel } from '../../../model/renderModel';
import StepType from '../../../model/StepType';
import EditCallContent from './call/EditCallContent';
import EditCompleteExecutionContent from './complete/EditCompleteExecutionContent';
import EditConditionContent from './condition/EditConditionContent';
import EditIterationContent from './iteration/EditIterationContent';
import EditJumpContent from './jump/EditJumpContent';
import { ICallContentRenderModel } from '../../../model/call';
import { ICompleteExecRenderModel } from '../../../model/completeExec';

interface IControlComponentRendererProps {
  type: StepType;
  data: IStepRenderModel;
}

const EditControlComponentRenderer: FC<IControlComponentRendererProps> = ({
  type,
  data,
}: IControlComponentRendererProps) => {
  switch (type) {
    case StepType.Call:
      return <EditCallContent data={data as ICallContentRenderModel} />;
    case StepType.CompleteExecution:
      return (
        <EditCompleteExecutionContent data={data as ICompleteExecRenderModel} />
      );
    case StepType.Condition:
      return <EditConditionContent data={data} />;
    case StepType.Iteration:
      return <EditIterationContent data={data} />;
    case StepType.Jump:
      return <EditJumpContent data={data} />;
    default:
      return <Typography variant="body2">Invalid step type!</Typography>;
  }
};

export default EditControlComponentRenderer;
