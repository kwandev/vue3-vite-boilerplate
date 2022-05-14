import { useAuthStore } from '@/store/auth';

export default class Auth {
  _token: string = '';

  constructor() {
    const authStore = useAuthStore();
    this._token = authStore.getAccessToken;
  }
}
