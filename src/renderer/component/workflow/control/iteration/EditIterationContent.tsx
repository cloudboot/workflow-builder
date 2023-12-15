import { IconButton, Stack, TextField } from "@mui/material";
import StepComponent from "../../main/Step";
import { Types } from "../../../../model/StepType";
import { Add } from "@mui/icons-material";

const EditIterationContent = () => {
  return (
    <Stack>
      <TextField id="iteration-step-name" label="Step name" />
      <TextField id="loop-variable-name" label="Loop variable name" />
      <TextField id="range" label="Range"></TextField>
      <IconButton><Add/></IconButton>
    </Stack>
  );
};

export default EditIterationContent;
