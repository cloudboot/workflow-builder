import { Stack } from '@mui/material';
import { FC } from 'react';

interface IVerticalSpaceProps {
  width: string;
}

const VerticalSpacer: FC<IVerticalSpaceProps> = ({width}) => {
  const stackStyle = {
    width: width
  }

  return (
    <Stack sx={stackStyle}></Stack>
  )
}


export default VerticalSpacer;
