<script setup lang="ts">
import { RouterProvider } from '@/modules/Router';

import MainComponent from './MainComponent.vue';
import SpinnerLoader from './components/SpinnerLoader';
</script>

<script lang="ts">
export default {};
</script>

<template>
  <Suspense>
    <RouterProvider>
      <MainComponent />
      <template #fallback><SpinnerLoader /></template>
    </RouterProvider>
  </Suspense>
</template>
