import { createNetwork } from '@/lib/network';
import { PostModel } from './sample.models';
import SampleAPI from './sample.api';
import AxiosAdapter from '@/lib/network/axiosAdapter';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const network: AxiosAdapter = createNetwork(BASE_URL);

export default class {
  async getPosts(params: PostModel) {
    return network.get(SampleAPI.posts, { ...params });
  }
}
