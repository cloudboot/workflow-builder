import HttpRequestMethod from './httpRequestMethod';
import { IKeyValuePair } from './common';
import { IStepRenderModel } from "./renderModel";

export enum CallType {
  HttpRequest = 'http.request',
}

export interface IHttpRequestCallModel {
  call: CallType;
  args: {
    url: string;
    method: HttpRequestMethod;
    private_service_name?: string;
    headers?: IKeyValuePair[];
    body?: any;
    query?: IKeyValuePair[];
    auth?: {
      type?: string;
      scope?: string;
      scopes?: any;
      audience?: any;
    };
    timeout?: number;
  };
  result?: any;
}

export interface ICallContentRenderModel extends IStepRenderModel {
  content: IHttpRequestCallModel;
}

export interface ICallContentProps {
  data: ICallContentRenderModel;
}
