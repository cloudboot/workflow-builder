import { configureStore } from '@reduxjs/toolkit';
import workflowsReducer from './workflowsSlice';
import stepsReducer from './stepsSlice';
import stepReducer from './stepSlice';
import workflowReducer from './workflowSlice';
import editorPanelCursorReducer from './editorPanelCursorSlice';

export const rootStore = configureStore({
  reducer: {
    step: stepReducer,
    steps: stepsReducer,
    workflow: workflowReducer,
    workflows: workflowsReducer,
    editorPanelCursor: editorPanelCursorReducer,
  },
});

export type RootState = ReturnType<typeof rootStore.getState>;
