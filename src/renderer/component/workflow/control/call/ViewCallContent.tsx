import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { ICallContentProps } from '../../../../model/call';
import { viewCallCardStyle } from '../../styles';

const ViewCallContent: FC<ICallContentProps> = ({
  data,
}: ICallContentProps) => {
  const callData = data.content;

  return (
    <Card sx={viewCallCardStyle}>
      <CardContent>
        <Typography variant="caption">{callData.call}</Typography>
        <Typography variant="body2">
          {callData.args.method} {callData.args.url}
        </Typography>
        {callData.result && (
          <Typography variant="body2">result: {callData.result}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ViewCallContent;
