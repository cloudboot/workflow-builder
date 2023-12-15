import { styled } from '@mui/material/styles';
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    border: '1px solid #dadde9',
  },
}));

export default HtmlTooltip;
