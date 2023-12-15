import { Card, CardContent, Stack, Typography } from "@mui/material";
import { ICondition } from "../../../../model/condition";
import { IStepRenderModel } from "../../../../model/renderModel";
import { viewConditionCardStyle } from "../../styles";

interface IConditionProps {
  data: IStepRenderModel;
}

function ViewConditionContent({ data }: IConditionProps) {
  const conditions = data.content as ICondition[];

  return (
    <Card sx={viewConditionCardStyle}>
      <CardContent>
        <Typography variant="caption">Switch</Typography>
        {conditions.map((element, index) => {
          return (
            <Stack
              key={`view-condition-child-${index}`}
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="body2">{element.condition}</Typography>
              {/* <ViewConditionChildContent */}
              {/*   type={element.type} */}
              {/*   value={element.value} */}
              {/* /> */}
            </Stack>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default ViewConditionContent;
