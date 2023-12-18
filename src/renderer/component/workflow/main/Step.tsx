import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import StepType from '../../../model/StepType';
import { stepCardStyle } from '../styles';

interface IStepComponentProps {
  name: string;
  type: StepType;
}

const StepComponent: FC<PropsWithChildren<IStepComponentProps>> = ({
  name,
  type,
  children,
}) => {
  return (
    <Card sx={stepCardStyle}>
      <CardContent>
        <Stack spacing={2} direction="column">
          <Stack>
            <Typography variant="caption">step</Typography>
            <Typography>{name}</Typography>
          </Stack>
          <Stack>{children}</Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default StepComponent;
