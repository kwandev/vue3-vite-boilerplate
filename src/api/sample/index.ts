import axios, { Axios, AxiosResponse, AxiosRequestConfig } from 'axios';
import { PostModel } from './sample.model';
import { SampleAPI } from './sample.type';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const network: Axios = axios.create({ baseURL: BASE_URL });

export const getPosts = async (params?: PostModel) => {
  return network.get(SampleAPI.posts, {});
};
