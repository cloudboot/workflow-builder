import { FC } from 'react';
import ViewJumpContent from '../jump/ViewJumpContent';
import { Typography } from '@mui/material';

interface ViewConditionChildContentProps {
  type: string;
  value: string;
}

const ViewConditionChildContent: FC<ViewConditionChildContentProps> = ({type, value}) => {
  switch (type) {
    case 'Jump':
      return <ViewJumpContent step={value}/>
    default:
      return <Typography variant="body2">Invalid Type!</Typography>
  }
}

export default ViewConditionChildContent;
