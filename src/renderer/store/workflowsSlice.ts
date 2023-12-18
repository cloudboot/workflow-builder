import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IWorkflowStateModel,
  IWorkflowStepStateModel,
} from '../model/storeModel';
import WorkflowType from '../model/WorkflowType';
import { IDictionary } from '../model/common';

const initialState: IDictionary<IWorkflowStateModel> = {
  'workflow-main': {
    id: 'workflow-main',
    name: 'main',
    params: [],
    type: WorkflowType.Primary,
    steps: [],
  } as IWorkflowStateModel,
};

export const workflowsSlice = createSlice({
  name: 'workflows',
  initialState,
  reducers: {
    addWorkflow: (state, action: PayloadAction<IWorkflowStateModel>) => {
      state[action.payload.id] = action.payload;
    },
    addStepToWorkflow: (
      state,
      action: PayloadAction<IWorkflowStepStateModel>,
    ) => {
      state[action.payload.workflowId].steps.push(action.payload.stepId);
    },
    deleteStepFromWorkflow: (
      state,
      action: PayloadAction<IWorkflowStepStateModel>,
    ) => {
      state[action.payload.workflowId].steps.splice(
        state[action.payload.workflowId].steps.indexOf(action.payload.stepId),
        1,
      );
    },
    deleteWorkflow: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const {
  addWorkflow,
  addStepToWorkflow,
  deleteStepFromWorkflow,
  deleteWorkflow,
} = workflowsSlice.actions;

const workflowsReducer = workflowsSlice.reducer;
export default workflowsReducer;
