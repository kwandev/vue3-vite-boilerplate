import { defineStore } from 'pinia';
import { ACCESS_TOKEN } from '@/constants';
import { State } from './auth.types';

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      accessToken: localStorage.getItem(ACCESS_TOKEN) || '',
    } as State;
  },
  getters: {
    getAccessToken: (state): string => state.accessToken,
  },
  actions: {
    setAccessToken(token: string): void {
      this.accessToken = token;
      localStorage.setItem(ACCESS_TOKEN, this.accessToken);
    },
  },
});
