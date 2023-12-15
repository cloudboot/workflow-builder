import { RootState } from './rootStore';

export const selectCurrentWorkflowId = (state: RootState) => state.workflow.id;

export const selectWorkflow = (state: RootState, workflowId: string) =>
  state.workflows[workflowId];

export const selectWorkflows = (state: RootState) => state.workflows;

export const selectCurrentStepId = (state: RootState) => state.step.id;

export const selectStep = (state: RootState, stepId: string) =>
  state.steps[stepId];
