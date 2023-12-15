import HttpRequestMethod from './httpRequestMethod';
import { IKeyValuePair } from './common';

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
