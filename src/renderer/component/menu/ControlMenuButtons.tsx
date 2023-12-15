import { Button, Stack, Typography } from '@mui/material';
import { toolbarButtonStyle } from '../styles';
import HtmlTooltip from '../tooltip/HtmlTooltip';

interface IControlMenuProps {
  disabled: boolean;
}

function ControlMenuButtons({ disabled }: IControlMenuProps) {
  const workflowDisabledWarning = 'Select a workflow to add this option!';

  return (
    <Stack direction="column">
      <HtmlTooltip
        title={
          <Stack spacing={1}>
            <Typography variant="inherit">Calls</Typography>
            {disabled && (
              <Typography variant="caption" color="orange">
                {workflowDisabledWarning}
              </Typography>
            )}
            <Typography variant="caption">
              A common type of workflow step uses the call field to run a
              function and return a result.
            </Typography>
            <Stack>
              <Typography variant="caption">Example:</Typography>
              <pre>
                {`{
    "get_message": {
      "call": "http.post",
      "args": {
        "url": "https://www.example.com/endpoint",
        "body": {
          "some_val": "Hello World",
          "another_val": 123
        }
      },
      "result": "the_message"
    }
}`}
              </pre>
            </Stack>
          </Stack>
        }
      >
        <span>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
            disabled={disabled}
          >
            Call
          </Button>
        </span>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Stack spacing={1}>
            <Typography variant="inherit">Complete executions</Typography>
            {disabled && (
              <Typography variant="caption" color="orange">
                {workflowDisabledWarning}
              </Typography>
            )}
            <Typography variant="caption">
              In your main workflow, you can stop it from running by using the{' '}
              <code>return</code> keyword. Another way to finish the workflow is
              by completing the final step, as long as that step does not lead
              to another one. The workflow stops in a few situations: when there
              is an error that is not caught, after all the steps are done, or
              if the keywords <code>end</code> or <code>return</code> are used
              in the main workflow.
            </Typography>
            <Stack>
              <Typography variant="caption">Example:</Typography>
              <pre>
                {`{
  "ending_step": {
   ...
    "next": "end"
  }
}`}
              </pre>
            </Stack>
          </Stack>
        }
      >
        <span>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
            disabled={disabled}
          >
            Complete execution
          </Button>
        </span>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Stack spacing={1}>
            <Typography variant="inherit">Conditions</Typography>
            {disabled && (
              <Typography variant="caption" color="orange">
                {workflowDisabledWarning}
              </Typography>
            )}
            <Typography variant="caption">
              A workflow's switch block allows the use of an expression's value
              to direct execution. If a match is found, the corresponding
              statement runs; otherwise, an optional default condition, placed
              last, takes effect. Limited to 50 conditions, each expression
              evaluates to true or false, offering a concise way to guide
              workflow steps based on conditions.
            </Typography>
            <Stack>
              <Typography variant="caption">Example:</Typography>
              <pre>
                {`{
  "where_to_jump": {
    "switch": [
      {
        "condition": "\${first_result.body.SomeField < 10}",
        "next": "small"
      },
      {
        "condition": "\${first_result.body.SomeField < 100}",
        "next": "medium"
      }
    ],
    "next": "large"
  }
}`}
              </pre>
            </Stack>
          </Stack>
        }
      >
        <span>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
            disabled={disabled}
          >
            Condition
          </Button>
        </span>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Stack spacing={1}>
            <Typography variant="inherit">Iterations</Typography>
            {disabled && (
              <Typography variant="caption" color="orange">
                {workflowDisabledWarning}
              </Typography>
            )}
            <Typography variant="caption">
              In Workflows, you can easily loop through a list using the for
              loop syntax. This loop allows you to iterate over a sequence of
              numbers or navigate through a collection of data, like a list or
              map. If you want to go through each item in a list or map, use
              item-based iteration. For iterating through a specific range of
              numeric values, opt for range-based iteration.
            </Typography>
            <Stack>
              <Typography variant="caption">Example:</Typography>
              <pre>
                {`{
  "innerLoop": {
    "for": {
      "value": "innerLoopValue",
      "in": [5, 6, 7, 8],
      "steps": [
        {
          "innerLoopAssign": {
            "assign": [
              {
                "workflowScope": "\${innerLoopValue}"
               },
               {
                 "innerLoopScope": "\${outerLoopScope}"
               }
            ]
          }
        }
      ]
    }
  }
}`}
              </pre>
            </Stack>
          </Stack>
        }
      >
        <span>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
            disabled={disabled}
          >
            Iteration
          </Button>
        </span>
      </HtmlTooltip>
      <HtmlTooltip
        title={
          <Stack spacing={1}>
            <Typography variant="inherit">Jump</Typography>
            {disabled && (
              <Typography variant="caption" color="orange">
                {workflowDisabledWarning}
              </Typography>
            )}
            <Typography variant="caption">
              Use jumps to control the next step in your workflow. At the end of
              any step, specify <code>next</code> to determine the following
              step. Additionally, employ <code>next: break</code> or{' '}
              <code>next: continue</code> to alter the flow of a for loop, and
              use <code>next: end</code> to halt the execution of a workflow or
              subworkflow. For further details on defining the order of
              execution, refer to Conditions and Control in a workflow.
            </Typography>
            <Stack>
              <Typography variant="caption">Example:</Typography>
              <pre>
                {`[
  {
    "first_step": {
      "call": "http.get",
      "args": {
        "url": "https://www.somewhere.com/callA"
      },
      "next": "second_step"
    }
  },
  {
    "second_step": {
      "call": "http.get",
      "args": {
        "url": "https://www.somewhere.com/callC"
      },
      "next": "end"
    }
  }
]`}
              </pre>
            </Stack>
          </Stack>
        }
      >
        <span>
          <Button
            sx={toolbarButtonStyle}
            variant="text"
            size="small"
            color="info"
            disabled={disabled}
          >
            Jump
          </Button>
        </span>
      </HtmlTooltip>
    </Stack>
  );
}

export default ControlMenuButtons;
