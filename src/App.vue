<template>
  <div class="app_container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
authStore.setAccessToken('qwertyasdfghzxcvbn');
</script>
