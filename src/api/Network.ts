import type { Adapter } from '@/lib/network';
import { createNetwork } from '@/lib/network';
import Auth from './Auth';

export interface NetworkOptions {
  auth: boolean;
}

const networkOptionsInit: NetworkOptions = {
  auth: true,
};

export default class Network extends Auth {
  _network: Adapter;

  constructor(options: NetworkOptions = networkOptionsInit) {
    super();

    this._network = createNetwork();

    if (options.auth) {
      this.setToken();
    } else {
      this._token = '';
    }

    this._network.authorization = this._token;
  }
}
