import { IEditorPanelCursorStateModel } from '../model/storeModel';zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
import { IWorkflowRenderModel } from '../model/renderModel';
import { Typography } from '@mui/material';
import EditSubworkflowContent from './workflow/main/workflow/EditSubworkflowContent';

interface IEditorPanelRendererProps {
  cursor: IEditorPanelCursorStateModel;
}

const EditorPanelRenderer = ({ cursor }: IEditorPanelRendererProps) => {

  switch (cursor.subType) {
    case WorkflowType.SubWorkflow:
      return <EditSubworkflowContent data={cursor.data as IWorkflowRenderModel} />;
    default:
      return <Typography variant="body2">Invalid type!</Typography>;22q
  }
};
