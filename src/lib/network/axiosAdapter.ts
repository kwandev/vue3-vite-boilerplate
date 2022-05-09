import axios, { Axios, AxiosResponse, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

import type Network from './network';

export default class AxiosAdapter implements Network {
  private readonly _instance: Axios;
  private _baseUrl: string = '';
  private _authorization: string = '';

  constructor() {
    this._instance = axios.create();
  }

  set baseUrl(url: string) {
    this._baseUrl = url;

    if (!!this._baseUrl) {
      this._instance.defaults.baseURL = this._baseUrl;
    }
  }

  set authorization(token: string) {
    this._authorization = token;

    // if (!!this._authorization) {
    //   this._instance.defaults.headers.common['Authorization'] = `bearer ${this._authorization}`;
    // } else {
    //   delete this._instance.defaults.headers.common['Authorization'];
    // }
  }

  async get(url: string, params: {}) {
    try {
      const response: AxiosResponse<any, any> = await this._instance.get(url, { params });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  async post(url: string, params: {}) {
    try {
      const response: AxiosResponse<any, any> = await this._instance.post(url, params);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  async put(url: string, params: {}) {
    try {
      const response: AxiosResponse<any, any> = await this._instance.put(url, params);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  async delete(url: string, params: {}) {
    try {
      const response: AxiosResponse<any, any> = await this._instance.post(url, { params });
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  async patch(url: string, params: {}) {
    try {
      const response: AxiosResponse<any, any> = await this._instance.post(url, params);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
