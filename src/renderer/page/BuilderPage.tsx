import { Stack } from '@mui/material';
import MenuPanel from '../component/MenuPanel';
import ViewerPanel from '../component/ViewerPanel';
import EditorPanel from '../component/EditorPanel';
import VerticalSpacer from '../component/VerticalSpacer';

function BuilderPage() {
  return (
    <Stack sx={{ width: '100%' }} direction="row">
      <VerticalSpacer width="1%" />
      <MenuPanel />
      <VerticalSpacer width="1%" />
      <ViewerPanel />
      <VerticalSpacer width="1%" />
      <EditorPanel />
      <VerticalSpacer width="1%" />
    </Stack>
  );
}

export default BuilderPage;
