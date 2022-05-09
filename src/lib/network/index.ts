// import type Network from "./network";
import AxiosAdapter from './axiosAdapter';

export function createNetwork(url?: string): AxiosAdapter {
  const builder: AxiosAdapter = new AxiosAdapter();

  if (!!url) {
    builder.baseUrl = url;
  }

  return builder;
}
