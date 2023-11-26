import { Card, CardContent, Typography } from '@mui/material';
import { IHttpRequestCallModel } from '../../../../model/call';
import { FC } from 'react';

interface ICallComponentProps {
  data: IHttpRequestCallModel;
}


const ViewCallContent: FC<ICallComponentProps> = (props: ICallComponentProps) => {
  const {data} = props;
  return (
    <Card>
      <CardContent>
        <Typography variant="caption">{data.call}</Typography>
        <Typography variant="body2">{data.args.method} {data.args.url}</Typography>
        {data.result && <Typography variant="body2">result: {data.result}</Typography>}
      </CardContent>
    </Card>
  )
}

export default ViewCallContent;
