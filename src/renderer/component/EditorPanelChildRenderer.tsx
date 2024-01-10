import WorkflowType from '../model/WorkflowType';
import StepType from '../model/StepType';
import EditSubworkflowContent from './workflow/main/workflow/EditSubworkflowContent';
import EditCallContent from './workflow/control/call/EditCallContent';
import EditCompleteExecutionContent from './workflow/control/complete/EditCompleteExecutionContent';
import EditConditionContent from './workflow/control/condition/EditConditionContent';
import EditIterationContent from './workflow/control/iteration/EditIterationContent';

interface IEditorPanelChildProps {
  childType: WorkflowType | StepType | undefined;
  childData: any;
}

const EditorPanelChildRenderer = ({
  childType,
  childData,
}: IEditorPanelChildProps) => {
  switch (childType) {
    case StepType.Call:
      return <EditCallContent data={childData} />;
    case StepType.CompleteExecution:
      return <EditCompleteExecutionContent data={childData} />;
    case StepType.Condition:
      return <EditConditionContent data={childData} />;
    case StepType.Iteration:
      return <EditIterationContent data={childData} />;
    case WorkflowType.SubWorkflow:
      return <EditSubworkflowContent data={childData} />;
    default:
      return <div />;
  }
};

export default EditorPanelChildRenderer;
