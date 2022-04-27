<script setup lang="ts">
import { ref } from 'vue';
import { useSampleStore } from '@/stores/sample';

const sampleStore = useSampleStore();

const onClick = () => {
  sampleStore.increment();
};

alert(1234);

const val = ref(0);
</script>

<template>
  <h1>{{ sampleStore.counter }}</h1>
  <h1>{{ sampleStore.doubleCount }}</h1>

  <button type="button" @click="onClick">increment</button>

  <input id="bb" v-model="val" class="aa" type="number" alt="" :attr="'1231'" @click="onClick" />

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
