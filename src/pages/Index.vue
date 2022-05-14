<template>
  <div class="page index">
    <h2>counter : {{ sampleStore.counter }}</h2>
    <h2>x2 : {{ sampleStore.doubleCount }}</h2>
    <button type="button" @click="onClick">increment</button>
    <button type="button" @click="sampleStore.randomizeCounter()">random number</button>
    <button type="button" @click="sampleStore.reset()">reset</button>

    <hr />

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
        <tr v-for="item in posts" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>{{ item.userId }}</td>
        </tr>
      </tbody>
    </table>

    <hr />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useSampleStore } from '@/store/sample';
import SampleAPI from '@/api/sample';
import { PostModel } from '@/api/sample/sample.models';
import { useAuthStore } from '@/store/auth';

const sampleStore = useSampleStore();

const authStore = useAuthStore();
authStore.setAccessToken('ahdskflahsjkfhl');

const posts = computed<PostModel[]>(() => sampleStore.getPosts);

const onClick = (): void => {
  sampleStore.increment();
};

const loadPosts = async (): Promise<any> => {
  const sampleApi = new SampleAPI();

  try {
    const data = await sampleApi.getPosts({ userId: 1 });
    sampleStore.setPosts(data);

    return data;
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  if (posts.value.length === 0) {
    loadPosts();
  }
});
</script>
