import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IVariableSelectorModel,
  IVariablesStoreModel,
} from '../model/storeModel';
import { IVariable } from '../model/variable';

const initialState: IVariablesStoreModel = {};

export const variablesSlice = createSlice({
  name: 'variables',
  initialState,
  reducers: {
    addVariable: (state, action: PayloadAction<IVariable>) => {
      if (!state[action.payload.ownerId]) {
        state[action.payload.ownerId] = []
      }
      state[action.payload.ownerId].push(action.payload);
    },
    deleteVariable: (state, action: PayloadAction<IVariableSelectorModel>) => {
      if (state[action.payload.ownerId]) {
        state[action.payload.ownerId] = state[action.payload.ownerId].splice(
          state[action.payload.ownerId].findIndex(
            (item) => item.id === action.payload.id,
          ),
        );
      }
    },
  },
});

const { addVariable, deleteVariable } = variablesSlice.actions;

const variablesReducer = variablesSlice.reducer;
export default variablesReducer;
