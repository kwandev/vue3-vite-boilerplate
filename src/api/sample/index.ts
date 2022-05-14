import { createNetwork } from '@/lib/network';
import { PostRequestModel } from './sample.models';
import SampleDocs from './sample.docs';
import AxiosAdapter from '@/lib/network/axiosAdapter';
import config from '@/config';
import Auth from '@/api/Auth';

const BASE_URL = config.api.default;
const network: AxiosAdapter = createNetwork(BASE_URL);

export default class SampleAPI extends Auth {
  constructor() {
    super();
    network.authorization = this._token;
  }

  async getPosts(params: PostRequestModel) {
    return network.get(SampleDocs.posts, { ...params });
  }
}
