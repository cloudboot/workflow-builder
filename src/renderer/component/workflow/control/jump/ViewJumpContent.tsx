import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { viewJumpCardStyle } from '../../styles';
import { IStepRenderModel } from '../../../../model/renderModel';

interface IViewJumpContentProps {
  data: IStepRenderModel;
}

const ViewJumpContent: FC<IViewJumpContentProps> = ({
  data,
}: IViewJumpContentProps) => {
  const jumpData = data.content;
  return (
    <Card sx={viewJumpCardStyle}>
      <CardContent>
        <Typography variant="caption">Jump</Typography>
        <Typography variant="body2">Next step: {jumpData}</Typography>
      </CardContent>
    </Card>
  );
};

export default ViewJumpContent;
