import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import ViewSubworkflowContent from './workflow/main/ViewSubworkflowContent';
import { viewerPanelStyle } from './styles';
import { IDictionary } from '../model/common';
import { IWorkflowRenderModel } from '../model/renderModel';
import { rootStore } from '../store/rootStore';
import { workflowsRenderModel } from '../utility/mapper';
import ControlComponentRenderer from './workflow/control/ControlComponentRenderer';

function ViewerPanel() {
  const [configTree, setConfigTree] = useState(
    {} as IDictionary<IWorkflowRenderModel>,
  );

  useEffect(() => {
    setConfigTree(workflowsRenderModel());
  }, []);

  rootStore.subscribe(() => {
    setConfigTree(workflowsRenderModel());
  });

  return (
    <Stack sx={viewerPanelStyle}>
      {Object.values(configTree).map((workflow) => {
        return (
          <ViewSubworkflowContent key={workflow.id} data={workflow}>
            {workflow.steps.map((step) => {
              return (
                <ControlComponentRenderer
                  key={step.id}
                  type={step.type}
                  data={step}
                />
              );
            })}
          </ViewSubworkflowContent>
        );
      })}
    </Stack>
  );
}

export default ViewerPanel;
