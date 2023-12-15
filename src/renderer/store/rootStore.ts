import { configureStore } from '@reduxjs/toolkit';
import workflowsReducer from './workflowsSlice';
import stepsReducer from './stepsSlice';
import stepReducer from './stepSlice';
import workflowReducer from './workflowSlice';

export const rootStore = configureStore({
  reducer: {
    step: stepReducer,
    steps: stepsReducer,
    workflow: workflowReducer,
    workflows: workflowsReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;
