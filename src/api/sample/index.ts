import config from '@/config';
import Network, { NetworkOptions } from '@/api/Network';
import SampleDocs from './sample.docs';
import { PostReqModel } from './sample.models';

const BASE_URL = config.api.default;

export default class SampleAPI extends Network {
  constructor(options?: NetworkOptions) {
    super(options);
    this._network.baseUrl = BASE_URL;
  }

  async getPosts(params: PostReqModel = {}) {
    return this._network.get(SampleDocs.posts, { ...params });
  }
}
