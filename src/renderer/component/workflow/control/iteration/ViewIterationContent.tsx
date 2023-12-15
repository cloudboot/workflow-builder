import { Card, CardContent, Typography } from '@mui/material';
import { viewIterationCardStyle } from '../../styles';
import { IStepRenderModel } from '../../../../model/renderModel';

interface IIterationProps {
  data: IStepRenderModel;
}

function ViewIterationComponent({ data }: IIterationProps) {
  return (
    <Card sx={viewIterationCardStyle}>
      <CardContent>
        <Typography variant="caption">Iterative execution</Typography>
        <Typography variant="body2">Step name</Typography>
        <Typography variant="body2">Loop variable name</Typography>
      </CardContent>
    </Card>
  );
}

export default ViewIterationComponent;
