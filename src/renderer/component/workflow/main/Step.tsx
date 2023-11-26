import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { StepType } from '../../../model/stepType';
import { FC, PropsWithChildren } from 'react';

interface IStepComponentProps {
  name: string;
  type: StepType;
}

const StepComponent: FC<PropsWithChildren<IStepComponentProps>> = ({name, type, children}) => {

  return (
    <Card>
      <CardContent>
        <Typography variant="caption">step</Typography>
        <Typography>{name}</Typography>
        {children}
      </CardContent>
    </Card>
  )
}

export default StepComponent;
