import { Button, Divider, Stack, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { selectCurrentWorkflowId } from '../store/selector';
import { rootStore } from '../store/rootStore';
import ControlMenuTooltipRenderer from './tooltip/ControlMenuTooltipRenderer';
import StepType from '../model/StepType';
import { toolbarButtonStyle } from './styles';
import ControlMenuButtons from './menu/ControlMenuButtons';

const toolbarStyle = {
  width: '15%',
};

const toolbarDividerStyle = {
  width: '70%',
};

const toolbarStackStyle = {
  textAlign: 'left',
  alignItems: 'left',
};

function MenuPanel() {
  const [disableControls, setDisableControls] = useState(false);

  useEffect(() => {
    setDisableControls(!selectCurrentWorkflowId(rootStore.getState()));
  }, []);

  rootStore.subscribe(() => {
    setDisableControls(!selectCurrentWorkflowId(rootStore.getState()));
  });

  return (
    <Stack sx={toolbarStyle}>
      <Stack direction="column" spacing={3}>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Workflow</Typography>
          <Divider sx={toolbarDividerStyle} />
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            SubWorkflow
          </Button>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            Step
          </Button>
        </Stack>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Calls and controlling flow</Typography>
          <Divider sx={toolbarDividerStyle} />
          <span>
            <ControlMenuButtons disabled={disableControls} />
          </span>
        </Stack>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Variables and expressions</Typography>
          <Divider sx={toolbarDividerStyle} />
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            Expression
          </Button>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            List
          </Button>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            Map
          </Button>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            Runtime arguments
          </Button>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            String
          </Button>
        </Stack>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Error handling</Typography>
          <Divider sx={toolbarDividerStyle} />
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            Catch error
          </Button>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            Raise error
          </Button>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
          >
            Retry
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MenuPanel;
