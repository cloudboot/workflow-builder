import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDictionary } from '../model/common';
import { IStepStateModel } from '../model/storeModel';

const initialState: IDictionary<IStepStateModel> = {};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    addStep: (state, action: PayloadAction<IStepStateModel>) => {
      state[action.payload.id] = action.payload;
    },
    deleteStep: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { addStep, deleteStep } = stepsSlice.actions;

const stepsReducer = stepsSlice.reducer;
export default stepsReducer;
