import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWorflowPartialStateModel } from '../model/storeModel';

const initialState: IWorflowPartialStateModel = {
  id: undefined,
};

export const workflowSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    setCurrentWorkflowId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    unsetCurrentWorkflowId: (state) => {
      state.id = undefined;
    },
  },
});

export const { setCurrentWorkflowId, unsetCurrentWorkflowId } =
  workflowSlice.actions;

const workflowReducer = workflowSlice.reducer;
export default workflowReducer;
