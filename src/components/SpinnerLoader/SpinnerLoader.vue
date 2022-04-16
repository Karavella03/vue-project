<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  loading: {
    default: true,
    type: Boolean,
  },
});
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div v-if="loading" class="container">
    <div class="loader">&nbsp;</div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 8em;
  height: 8em;
}
.loader {
  font-size: 10px;
  position: relative;
  border-top: 1em solid rgba(255, 255, 255, 0.2);
  border-right: 1em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.5em solid rgba(255, 255, 255, 0.2);
  border-left: 1em solid #ffffff;
  transform: translateZ(0);
  animation: load 700ms infinite linear;
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

