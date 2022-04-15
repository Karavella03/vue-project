<template>
  <Suspense>
    <MainLayout />
    <template #fallback><SpinnerLoader /></template>
  </Suspense>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import SpinnerLoader from "@/components/SpinnerLoader.vue";
import { useLocation } from "./common/useLocation";

useLocation();
</script>

<script lang="ts">
export default {};
</script>

<style>
:root {
  /* colors */
  --transparent-gray: rgba(128, 128, 128, 0.4);
  --font-color: rgba(48, 48, 48);
  --font-color-hover: rgba(160, 180, 170);
  --font-color-active: rgba(140, 160, 155);

  /* sizes */
  --header-height: 96px;
  --header-min-width: 440px;
  /* fonts */
  --header-title-font-size: 26px;
  --header-title-font-weight: 400;
  --header-buttons-font-size: 16px;
  --header-buttons-font-weight: 400;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
* {
  box-sizing: border-box;
  margin: 0;
}
ul[class],
ol[class] {
  list-style: none;
  padding: 0;
}
.mr-8 {
  margin-right: 8px;
}
.mb-8 {
  margin-bottom: 8px;
}
</style>
