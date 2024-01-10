import { Box, Card, Stack } from "@mui/material";
import { useEffect, useState } from 'react';
import { editorPanelStyle } from './styles';
import { IEditorPanelCursorStateModel } from '../model/storeModel';
import { selectEditorPanelCursor } from '../store/selector';
import { rootStore } from '../store/rootStore';
import WorkflowType from '../model/WorkflowType';
import EditSubworkflowContent from './workflow/main/workflow/EditSubworkflowContent';
import EditorPanelChildRenderer from './EditorPanelChildRenderer';

function EditorPanel() {
  const [cursor, setCursor] = useState({
    visible: false,
  } as IEditorPanelCursorStateModel);
  const [renderComponent, setRenderComponent] = useState(undefined);

  useEffect(() => {
    setCursor(selectEditorPanelCursor(rootStore.getState()));
  }, []);

  rootStore.subscribe(() => {
    setCursor(selectEditorPanelCursor(rootStore.getState()));
  });

  return (
    <Stack sx={editorPanelStyle}>
      {cursor.visible && (
        <Box>
          <EditorPanelChildRenderer
            childType={cursor.subType}
            childData={cursor.data}
          />
        </Box>
      )}
    </Stack>
  );
}

export default EditorPanel;
