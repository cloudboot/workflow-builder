import { Card, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { editorPanelStyle } from './styles';
import { IEditorPanelCursorStateModel } from '../model/storeModel';
import { selectEditorPanelCursor } from '../store/selector';
import { rootStore } from '../store/rootStore';

function EditorPanel() {
  const [cursor, setCursor] = useState({
    visible: false,
  } as IEditorPanelCursorStateModel);

  useEffect(() => {
    setCursor(selectEditorPanelCursor(rootStore.getState()));
  }, []);

  rootStore.subscribe(() => {
    setCursor(selectEditorPanelCursor(rootStore.getState()));
  });

  return (
    <Stack sx={editorPanelStyle}>
      {cursor.visible && <Card>dsdsf</Card>

      }
    </Stack>
  );
}

export default EditorPanel;
