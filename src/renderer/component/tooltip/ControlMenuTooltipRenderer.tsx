import { Fragment, PropsWithChildren, useEffect, useState } from 'react';
import { Tooltip, Typography } from '@mui/material';
import StepType from '../../model/StepType';
import HtmlTooltip from './HtmlTooltip';

interface ITooltipRendererProps {
  type: StepType;
  children: any;
}

function ControlMenuTooltipRenderer({
  type,
  children,
}: PropsWithChildren<ITooltipRendererProps>) {
  switch (type) {
    case StepType.Call:
      return (
        <HtmlTooltip
          title={
            <>
              <Typography variant="inherit">Calls</Typography>
              <Typography variant="body2">
                A common type of workflow step uses the call field to run a
                function and return a result.
              </Typography>
            </>
          }
        >
          {children}
        </HtmlTooltip>
      );
    default:
      return (
        <Tooltip
          title={
            <Typography variant="body2">
              Please select a workflow to enable controls!
            </Typography>
          }
        >
          {children}
        </Tooltip>
      );
  }
}

export default ControlMenuTooltipRenderer;
