import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStepPartialStateModel } from '../model/storeModel';

const initialState: IStepPartialStateModel = {
  id: undefined,
};

export const stepSlice = createSlice({
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

export const { set, unset } = stepSlice.actions;

const stepReducer = stepSlice.reducer;
export default stepReducer;
