import CompleteExecType from './CompleteExecType';
import { IStepRenderModel } from "./renderModel";

export interface ICompleteExec {
  execType: CompleteExecType;
  execValue: string;
}

export interface ICompleteExecRenderModel extends IStepRenderModel {
  content: ICompleteExec;
}

export interface ICompleteExecContentProps {
  data: ICompleteExecRenderModel;
}
