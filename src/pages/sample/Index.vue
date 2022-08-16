<template>
  <div class="page sample">
    <section class="counter">
      <h1>Counter Sample</h1>
      <h2>counter : {{ sampleStore.counter }}</h2>
      <h2>counter X 2 : {{ sampleStore.doubleCount }}</h2>
      <button type="button" @click="onClickIncrement">increment</button>
      <button type="button" @click="sampleStore.randomizeCounter()">random number</button>
      <button type="button" @click="sampleStore.reset()">reset counter</button>
    </section>

    <section class="api">
      <h1>API Sample</h1>
      <button @click="onClickUserFilter(2)">userid 2 검색</button>
      <button @click="onClickUserResetFilter">reset filter</button>

      <template v-if="isLoading">
        <p>Loading...</p>
      </template>
      <template v-else>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
              <th>userId</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in state" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.title }}</td>
              <td>{{ item.body }}</td>
              <td>{{ item.userId }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useSampleStore } from '@/store/sample';
import { PostReqModel } from '@/api/sample/sample.models';
import { usePosts } from '@/domain/sample';
import { useRouter, useRoute, LocationQuery } from 'vue-router';

const router = useRouter();
const route = useRoute();
const sampleStore = useSampleStore();

// Counter
const onClickIncrement = (): void => {
  sampleStore.increment();
};

// API
const { execute, state, isLoading, isSuccess } = usePosts();

const init = () => {
  const routeQuery: LocationQuery = route.query;
  const options: PostReqModel = {};

  if (routeQuery.userId && typeof routeQuery.userId === 'string') {
    options.userId = parseInt(routeQuery.userId);
  }

  execute(options);
};

const onClickUserFilter = (userId: number) => {
  router.push({
    name: 'Main',
    query: {
      userId,
    },
  });
};

const onClickUserResetFilter = () => {
  router.push({
    name: 'Main',
  });
};

watch(
  () => route.query,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      init();
    }
  }
);

init();
</script>
