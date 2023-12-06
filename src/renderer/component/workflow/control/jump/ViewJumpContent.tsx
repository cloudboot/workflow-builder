import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';

interface ViewJumpContentProps {
  step: string;
}

const ViewJumpContent: FC<ViewJumpContentProps> = ({step}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="caption">Jump</Typography>
        <Typography variant="body2">Next step: {step}</Typography>
      </CardContent>
    </Card>
  )
};

export default ViewJumpContent;
