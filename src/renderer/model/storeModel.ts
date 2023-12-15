import StepType from './StepType';
import WorkflowType from './WorkflowType';

export interface IStepPartialStateModel {
  id: string | undefined;
}

export interface IWorflowPartialStateModel {
  id: string | undefined;
}

export interface IStepStateModel {
  id: string;
  type: StepType;
  name: string;
  content: any;
}

export interface IWorkflowStateModel {
  id: string;
  type: WorkflowType;
  name: string;
  params: any[];
  steps: string[];
}

export interface IWorkflowStepStateModel {
  workflowId: string;
  stepId: string;
}
