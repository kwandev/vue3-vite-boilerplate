export default interface Network {
  get(url: string, params: {}): Promise<unknown>;
  post(url: string, params: {}): Promise<unknown>;
  put(url: string, params: {}): Promise<unknown>;
  delete(url: string, params: {}): Promise<unknown>;
  patch(url: string, params: {}): Promise<unknown>;
}
