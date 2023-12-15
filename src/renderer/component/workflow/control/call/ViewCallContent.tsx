import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { IHttpRequestCallModel } from '../../../../model/call';
import { viewCallCardStyle } from '../../styles';
import {
  IStepRenderModel,
  IWorkflowRenderModel,
} from '../../../../model/renderModel';

interface ICallComponentProps {
  data: IStepRenderModel;
}

const ViewCallContent: FC<ICallComponentProps> = ({
  data,
}: ICallComponentProps) => {
  const callData = data.content as IHttpRequestCallModel;

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
