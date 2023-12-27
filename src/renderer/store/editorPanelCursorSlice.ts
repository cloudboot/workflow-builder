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
      return {
        visible: true,
        id: action.payload.id,
        type: action.payload.type,
        subType: action.payload.subType,
        data: action.payload.data,
      };
    },
    unsetEditorPanelCursor: (state) => {
      return {
        visible: false,
      };
    },
  },
});

export const { setEditorPanelCursor, unsetEditorPanelCursor } =
  editorPanelCursorSlice.actions;

const editorPanelCursorReducer = editorPanelCursorSlice.reducer;
export default editorPanelCursorReducer;
