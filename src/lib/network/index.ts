import Adapter from './axiosAdapter';

export function createNetwork(url?: string): Adapter {
  const builder: Adapter = new Adapter();

  if (!!url) {
    builder.baseUrl = url;
  }

  return builder;
}

export type { Adapter };
