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
    set: (state, action: PayloadAction<IWorkflowStateModel>) => {
      state[action.payload.id] = action.payload;
    },
    pushStep: (state, action: PayloadAction<IWorkflowStepStateModel>) => {
      state[action.payload.workflowId].steps.push(action.payload.stepId);
    },
    removeStep: (state, action: PayloadAction<IWorkflowStepStateModel>) => {
      state[action.payload.workflowId].steps.splice(
        state[action.payload.workflowId].steps.indexOf(action.payload.stepId),
        1,
      );
    },
    remove: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { set, pushStep, removeStep, remove } = workflowsSlice.actions;

const workflowsReducer = workflowsSlice.reducer;
export default workflowsReducer;
