import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IWorflowPartialStateModel } from '../model/storeModel';

const initialState: IWorflowPartialStateModel = {
  id: undefined,
};

export const workflowSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    unset: (state) => {
      state.id = undefined;
    },
  },
});

export const { set, unset } = workflowSlice.actions;

const workflowReducer = workflowSlice.reducer;
export default workflowReducer;
