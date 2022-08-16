import { useAuthStore } from '@/store/auth';

export default class Auth {
  _token: string = '';

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }

  setToken() {
    const authStore = useAuthStore();
    this._token = authStore.getAccessToken;
  }
}
