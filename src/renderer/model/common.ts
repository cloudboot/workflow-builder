export interface IKeyValuePair {
  key: string;
  value: any;
}

export interface IDictionary<T> {
  [key: string]: T;
}
