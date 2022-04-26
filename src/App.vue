<script setup lang="ts">
import MainComponent from './MainComponent.vue';
import SpinnerLoader from './components/SpinnerLoader';
import RouterProvider from './components/RouterProvider';
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
