import WorkflowType from './WorkflowType';
import StepType from './StepType';
import { IKeyValuePair } from './common';

export interface IRenderModel {}

export interface IStepRenderModel extends IRenderModel {
  id: string;
  type: StepType;
  name: string;
}

export interface IWorkflowRenderModel extends IRenderModel {
  id: string;
  type: WorkflowType;
  name: string;
  params: IKeyValuePair[];
  steps: IStepRenderModel[];
}
