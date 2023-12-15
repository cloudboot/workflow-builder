import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { subworkflowCardStyle } from '../styles';

interface IRuntimeArgument {
  key: string;
  defaultValue: any;
}

interface ISubworkflowProps {
  name: string;
  params: IRuntimeArgument[];
}

const SubworkflowComponent: FC<PropsWithChildren<ISubworkflowProps>> = ({
  name,
  params,
  children,
}) => {
  return (
    <Card sx={subworkflowCardStyle}>
      <CardContent>
        <Stack spacing={2}>
          <Stack spacing={2}>
            <Stack>
              <Typography variant="caption">workflow</Typography>
              <Typography variant="h6">{name}</Typography>
            </Stack>
            <Stack>
              <Typography variant="caption">arguments</Typography>
              {params.map((arg, index) => {
                return (
                  <Typography key={`arg${index}`} variant="body2">
                    {arg.key}, default: {arg.defaultValue}
                  </Typography>
                );
              })}
            </Stack>
          </Stack>
          <Stack alignItems="center">{children}</Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SubworkflowComponent;
