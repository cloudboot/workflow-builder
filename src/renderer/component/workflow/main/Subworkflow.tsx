import { Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface IRuntimeArgument {
  key: string;
  defaultValue: any;
}

interface ISubworkflowProps {
  name: string;
  args: IRuntimeArgument[];
}

const subworkflowCardStyle = {
  width: "100%",
  //boxShadow: "none"
}

const SubworkflowComponent: FC<PropsWithChildren<ISubworkflowProps>> = ({name, args, children}) => {

  return (
    <Card sx={subworkflowCardStyle}>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Divider/>
          <Typography variant="caption">arguments</Typography>
          {args.map((arg, index) => {
            return <Typography key={`arg${index}`} variant="body2">{arg.key}, default value: {arg.defaultValue}</Typography>
          })}
          {children}
        </CardContent>
    </Card>
  )
}

export default SubworkflowComponent;
