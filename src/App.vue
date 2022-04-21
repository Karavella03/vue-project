<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import SpinnerLoader from '@/components/SpinnerLoader';

import { useLocation } from './common/useLocation';
import { useRouter } from './common/useRouter';

useLocation();
const { CurrentPage } = useRouter();
</script>

<script lang="ts">
export default {};
</script>

<template>
  <Suspense>
    <MainLayout><CurrentPage /></MainLayout>
    <template #fallback><SpinnerLoader /></template>
  </Suspense>
</template>

<style>
:root {
  /* colors */
  --transparent-gray: rgba(128, 128, 128, 0.4);
  --font-color: rgba(48, 48, 48);
  --font-color-hover: rgba(160, 180, 170);
  --font-color-active: rgba(140, 160, 155);
  --main-layout-background: rgba(255, 255, 255);
  --app-background: rgba(250, 250, 250);
  --header-background: var(--main-layout-background);
  --header-border-color: none;
  --footer-border-color: var(--header-border-color);
  --box-shadow-color: #9b9faa;
  --box-shadow: 3px 3px 5px -1px var(--box-shadow-color);
  --slider-button-color: rgba(128, 128, 128, 0.2);
  --slider-button-hover-color: rgba(160, 180, 170, 0.1);
  --slider-arrow-color: rgba(161, 190, 174, 0.3);
  /* sizes */
  --main-layout-min-width: 720px;
  --main-layout-max-width: 1440px;
  --main-layout-width: 90vw;
  --main-layout-min-height: 100vh;
  --header-height: 96px;
  --footer-height: 64px;
  --default-spacing: 8px;
  --slider-width: calc(
    var(--main-layout-width) - (var(--default-spacing) * 6 * 2)
  );
  --slider-min-width: calc(
    var(--main-layout-min-width) - (var(--default-spacing) * 6 * 2)
  );
  --slider-max-width: calc(
    var(--main-layout-max-width) - (var(--default-spacing) * 6 * 2)
  );
  --slider-button-width: 128px;
  --slider-height: 720px;
  /* fonts */
  --header-title-font-size: 26px;
  --header-title-font-weight: 400;
  --header-buttons-font-size: 16px;
  --header-buttons-font-weight: 400;
  --footer-paragraph-font-size: 16px;
  --footer-paragraph-font-weight: 400;
  --slider-item-description-font-size: 54px;
  --slider-item-head-font-size: 96px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  height: 1px;
  background-color: var(--app-background);
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
