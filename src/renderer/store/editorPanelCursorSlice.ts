import { IEditorPanelCursorStateModel } from '../model/storeModel';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IEditorPanelCursorStateModel = {
  visible: false,
};

export const editorPanelCursorSlice = createSlice({
  name: 'editorPanelCursor',
  initialState,
  reducers: {
    setEditorPanelCursor: (
      state,
      action: PayloadAction<IEditorPanelCursorStateModel>,
    ) => {
      state.id = action.payload.id;
      state.type = action.payload.type;
      state.subType = action.payload.subType;
    },
    unsetEditorPanelCursor: (state) => {
      state.id = undefined;
      state.type = undefined;
      state.subType = undefined;
      state.visible = false;
    },
  },
});

const { setEditorPanelCursor, unsetEditorPanelCursor } =
  editorPanelCursorSlice.actions;

const editorPanelCursorReducer = editorPanelCursorSlice.reducer;
export default editorPanelCursorReducer;
