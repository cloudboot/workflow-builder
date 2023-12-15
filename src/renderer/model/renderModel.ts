import WorkflowType from "./WorkflowType";
import StepType from "./StepType";

export interface IStepRenderModel {
  id: string;
  type: StepType;
  name: string;
  content: any;
}

export interface IWorkflowRenderModel {
  id: string;
  type: WorkflowType;
  name: string;
  params: any[];
  steps: IStepRenderModel[];
}
