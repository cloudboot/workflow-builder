import { Card, CardContent, Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { subworkflowCardStyle } from '../../styles';
import { IWorkflowRenderModel } from '../../../../model/renderModel';
import { setCurrentWorkflowId } from '../../../../store/workflowSlice';
import { rootStore } from '../../../../store/rootStore';
import { selectCurrentWorkflowId } from '../../../../store/selector';
import { setEditorPanelCursor } from '../../../../store/editorPanelCursorSlice';
import WorkflowComponentType from '../../../../model/WorkflowComponentType';
import WorkflowType from '../../../../model/WorkflowType';

interface IViewSubworkflowProps {
  data: IWorkflowRenderModel;
  children: ReactNode;
}

const ViewSubworkflowContent: FC<PropsWithChildren<IViewSubworkflowProps>> = ({
  data,
  children,
}: IViewSubworkflowProps) => {
  const [workflowIdCursor, setWorkflowIdCursor] = useState(
    '' as string | undefined,
  );

  useEffect(() => {
    setWorkflowIdCursor(selectCurrentWorkflowId(rootStore.getState()));
  }, []);

  rootStore.subscribe(() => {
    setWorkflowIdCursor(selectCurrentWorkflowId(rootStore.getState()));
  });

  const onSubworkflowSelect = (workflowId: string) => {
    rootStore.dispatch(setCurrentWorkflowId(workflowId));
    rootStore.dispatch(
      setEditorPanelCursor({
        id: data.id,
        subType: WorkflowType.SubWorkflow,
        type: WorkflowComponentType.Workflow,
        visible: true,
        data,
      }),
    );
  };

  return (
    <Card
      sx={subworkflowCardStyle(workflowIdCursor === data.id)}
      onClick={() => onSubworkflowSelect(data.id)}
    >
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={2}>
            <Stack>
              <Typography variant="caption">workflow</Typography>
              <Typography variant="h6">{data.name}</Typography>
            </Stack>
            <Stack>
              <Typography variant="caption">arguments</Typography>
              {data.params.map((arg, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <Typography key={`arg${index}`} variant="body2">
                    {arg.key}, default: {arg.value}
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
          <Stack alignItems="center">{children}</Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ViewSubworkflowContent;
