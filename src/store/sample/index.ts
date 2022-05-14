import { defineStore } from 'pinia';
import { State } from './sample.types';
import { PostModel } from '@/api/sample/sample.models';

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
    getPosts: (state): PostModel[] => state.posts,
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
    setPosts(posts: PostModel[]) {
      this.posts = posts;
    },
  },
});
