import { IWorkflowStateModel } from '../model/storeModel';
import { IWorkflowRenderModel } from '../model/renderModel';
import { selectStep, selectWorkflows } from "../store/selector";
import { rootStore } from '../store/rootStore';
import { IDictionary } from "../model/common";

export const workflowStoreModelToRenderModel = (
  workflowStoreModel: IWorkflowStateModel,
): IWorkflowRenderModel => {
  return {
    id: workflowStoreModel.id,
    name: workflowStoreModel.name,
    type: workflowStoreModel.type,
    params: workflowStoreModel.params,
    steps: workflowStoreModel.steps.map((stepId) => {
      return selectStep(rootStore.getState(), stepId);
    }),
  };
};

export const workflowsRenderModel = () => {
  const renderModel: IDictionary<IWorkflowRenderModel> = {};
  const workflowsState = selectWorkflows(rootStore.getState());
  Object.entries(workflowsState).forEach(([workflowId, workflow]) => {
    renderModel[workflowId] = workflowStoreModelToRenderModel(workflow);
  });
  return renderModel;
};
