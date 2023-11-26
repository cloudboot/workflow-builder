import { Card, CardContent, Typography } from '@mui/material';

const ViewJumpContent = () => {
  const nextStep = "next_step";
  return (
    <Card>
      <CardContent>
        <Typography variant="caption">Next</Typography>
        <Typography variant="body2">Jump to step: {nextStep}</Typography>
      </CardContent>
    </Card>
  )
};

export default ViewJumpContent;
