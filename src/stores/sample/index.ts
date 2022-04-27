import { defineStore } from 'pinia';

export const useSampleStore = defineStore('sample', {
  state: () => {
    return {
      counter: 0 as number,
      name: 'Eduardo' as string,
      isAdmin: true as boolean,
    };
  },
  getters: {
    doubleCount: (state): number => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
  },
});
