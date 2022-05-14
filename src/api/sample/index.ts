import { createNetwork } from '@/lib/network';
import { PostModel } from './sample.models';
import SampleDocs from './sample.docs';
import AxiosAdapter from '@/lib/network/axiosAdapter';
import config from '@/config';
import AuthToken from '@/api/authToken';

const BASE_URL = config.api.default;
const network: AxiosAdapter = createNetwork(BASE_URL);

export default class SampleAPI extends AuthToken {
  constructor() {
    super();
    network.authorization = this._token;
  }

  async getPosts(params: PostModel) {
    return network.get(SampleDocs.posts, { ...params });
  }
}
