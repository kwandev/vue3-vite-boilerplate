<template>
  <div class="page index">
    <h1>{{ sampleStore.counter }}</h1>
    <h1>{{ sampleStore.doubleCount }}</h1>
    <button type="button" @click="onClick">increment</button>

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
        <tr v-for="item in sampleArray" :key="item.id">
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
import { onMounted, ref } from 'vue';
import { useSampleStore } from '@/stores/sample';
import Sample from '@/api/sample';
import { PostModel } from '@/api/sample/sample.models';

const sampleStore = useSampleStore();

const onClick = () => {
  sampleStore.increment();
};

const sampleArray = ref<PostModel[]>([]);

const sample = new Sample();

onMounted(async () => {
  try {
    sampleArray.value = await sample.getPosts({ userId: 1 });
  } catch (e) {
    console.error(e);
  }
});
</script>
