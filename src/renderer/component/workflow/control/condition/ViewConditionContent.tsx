import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { ICondition } from '../../../../model/condition';
import ViewConditionChildContent from './ViewConditionChildContent';

const ViewConditionContent = () => {
  const conditions: ICondition[] = [
    {
      condition: "$result.body === 1",
      type: "Jump",
      value: "next_step"
    }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="caption">Switch</Typography>
        {conditions.map((element, index) => {
          return <Stack key={`view-condition-child-${index}`} direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">{index + 1}</Typography>
            <ViewConditionChildContent type={element.type} value={element.value}/>
          </Stack>
        })}
      </CardContent>
    </Card>
  )
}

export default ViewConditionContent;
