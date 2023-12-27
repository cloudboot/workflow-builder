import { configureStore } from '@reduxjs/toolkit';
import workflowsReducer from './workflowsSlice';
import stepsReducer from './stepsSlice';
import stepReducer from './stepSlice';
import workflowReducer from './workflowSlice';
import editorPanelCursorReducer from './editorPanelCursorSlice';
import variablesReducer from './variablesSlice';

export const rootStore = configureStore({
  reducer: {
    step: stepReducer,
    steps: stepsReducer,
    workflow: workflowReducer,
    workflows: workflowsReducer,
    editorPanelCursor: editorPanelCursorReducer,
    variables: variablesReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
