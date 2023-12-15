import { FC } from 'react';
import { Typography } from '@mui/material';
import { IStepRenderModel } from '../../../model/renderModel';
import StepType from '../../../model/StepType';
import ViewCallContent from './call/ViewCallContent';
import ViewCompleteExecutionContent from './complete/ViewCompleteExecutionContent';
import ViewConditionContent from './condition/ViewConditionContent';
import ViewIterationComponent from './iteration/ViewIterationContent';
import ViewJumpContent from './jump/ViewJumpContent';

interface IControlComponentRendererProps {
  type: StepType;
  data: IStepRenderModel;
}

const ControlComponentRenderer: FC<IControlComponentRendererProps> = (
  props: IControlComponentRendererProps,
) => {
  const { type, data } = props;

  switch (type) {
    case StepType.Call:
      return <ViewCallContent data={data} />;
    case StepType.CompleteExecution:
      return <ViewCompleteExecutionContent data={data} />;
    case StepType.Condition:
      return <ViewConditionContent data={data} />;
    case StepType.Iteration:
      return <ViewIterationComponent data={data} />;
    case StepType.Jump:
      return <ViewJumpContent data={data} />;
    default:
      return <Typography variant="body2">Invalid step type!</Typography>;
  }
};

export default ControlComponentRenderer;
