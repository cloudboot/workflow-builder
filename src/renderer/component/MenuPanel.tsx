import { Button, Divider, Stack, Typography } from '@mui/material';

const toolbarStyle = {
  width: "15%"
}

const toolbarDividerStyle = {
  width: "70%"
}

const toolbarStackStyle = {
  textAlign: "left",
  alignItems: "left"
}

const toolbarButtonStyle = {
  textTransform: "none",
  textAlign: "left",
  justifyContent: "flex-start",
  maxWidth: 180
}

const MenuPanel = () => {
  return (
    <Stack sx={toolbarStyle}>
      <Stack direction="column" spacing={3}>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Workflow</Typography>
          <Divider sx={toolbarDividerStyle}/>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">SubWorkflow</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Step</Button>
        </Stack>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Calls and controlling flow</Typography>
          <Divider sx={toolbarDividerStyle}/>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Call</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Complete execution</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Condition</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Iteration</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Jump</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Parallel steps</Button>
        </Stack>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Variables and expressions</Typography>
          <Divider sx={toolbarDividerStyle}/>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Expression</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">List</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Map</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Runtime arguments</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">String</Button>
        </Stack>
        <Stack sx={toolbarStackStyle}>
          <Typography variant="caption">Error handling</Typography>
          <Divider sx={toolbarDividerStyle}/>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Catch error</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Raise error</Button>
          <Button sx={toolbarButtonStyle} variant="text" size="small" color="info">Retry</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MenuPanel;
