import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStepPartialStateModel } from '../model/storeModel';

const initialState: IStepPartialStateModel = {
  id: undefined,
};

export const stepSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    setCurrentStepId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    unsetCurrentStepId: (state) => {
      state.id = undefined;
    },
  },
});

export const { setCurrentStepId, unsetCurrentStepId } = stepSlice.actions;

const stepReducer = stepSlice.reducer;
export default stepReducer;
