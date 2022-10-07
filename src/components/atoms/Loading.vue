<template>
  <div class="atom loading">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
  }>(),
  {
    text: 'Loading...',
  }
);
</script>
