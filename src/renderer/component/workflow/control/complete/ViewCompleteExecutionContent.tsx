import { Card, CardContent, Typography } from '@mui/material';
import { viewCompleteExecCardStyle } from '../../styles';
import { ICompleteExec } from '../../../../model/completeExec';
import { IStepRenderModel } from '../../../../model/renderModel';

interface ICompleteExecProps {
  data: IStepRenderModel;
}

function ViewCompleteExecutionContent({ data }: ICompleteExecProps) {
  const completeExecData = data.content as ICompleteExec;

  return (
    <Card sx={viewCompleteExecCardStyle}>
      <CardContent>
        <Typography variant="caption">Complete execution</Typography>
        <Typography variant="body2">
          {completeExecData.execType}: {completeExecData.execValue}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ViewCompleteExecutionContent;
