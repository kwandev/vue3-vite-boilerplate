import { defineStore } from 'pinia';
import { State } from './sample.types';
import { PostStoreModel } from '@/store/sample/sample.types';

export const useSampleStore = defineStore('sample', {
  state: () => {
    return {
      counter: 0,
      name: '홍길동',
      posts: [],
    } as State;
  },
  getters: {
    doubleCount: (state): number => state.counter * 2,
    getPosts: (state): PostStoreModel[] => state.posts,
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
    reset() {
      this.counter = 0;
    },
    setPosts(posts: PostStoreModel[]) {
      this.posts = posts;
    },
  },
});
