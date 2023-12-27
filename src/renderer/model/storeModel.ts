import StepType from './StepType';
import WorkflowType from './WorkflowType';
import WorkflowComponentType from './WorkflowComponentType';
import { IKeyValuePair } from './common';
import { IVariable } from './variable';
import { IRenderModel } from './renderModel';

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
  params: IKeyValuePair[];
  steps: string[];
}

export interface IWorkflowStepStateModel {
  workflowId: string;
  stepId: string;
}

export interface IEditorPanelCursorStateModel {
  id?: string;
  type?: WorkflowComponentType;
  subType?: StepType | WorkflowType;
  visible: boolean;
  data?: IRenderModel;
}

export interface IVariablesStoreModel {
  [key: string]: IVariable[];
}

export interface IVariableSelectorModel {
  id: string;
  ownerId: string;
}
