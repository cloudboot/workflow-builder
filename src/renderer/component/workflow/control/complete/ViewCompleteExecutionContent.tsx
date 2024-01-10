import { Card, CardContent, Typography } from '@mui/material';
import { viewCompleteExecCardStyle } from '../../styles';
import {
  ICompleteExecContentProps,
} from '../../../../model/completeExec';

function ViewCompleteExecutionContent({ data }: ICompleteExecContentProps) {
  const completeExecData = data.content;

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
