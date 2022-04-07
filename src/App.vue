<template>
  <Suspense>
    <MainLayout />
    <template #fallback><Loader /></template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import Loader from "@/components/Loader.vue";

export default defineComponent({
  name: "App",
  components: {
    MainLayout,
    Loader,
  },
});
</script>

<style>
:root {
  /* variables */
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
