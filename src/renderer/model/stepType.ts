export enum StepType {
  VariableAssignment = "variable",
  ApplyCondition = "condition",
  InvokeHttpEndpoint = "call",
  ReturnValue = "end",
  PauseWorkflow = "sleep"
}
