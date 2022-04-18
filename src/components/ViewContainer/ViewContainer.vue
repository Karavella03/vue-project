<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  paddingHorizontal: {
    default: 6,
    type: Number,
    required: false,
  },
  paddingVertical: {
    default: 0,
    type: Number,
    required: false,
  },
});
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="ViewContainerContainer">
    <slot></slot>
  </div>
</template>


<style scoped>
.ViewContainerContainer {
  width: 100%;
  height: 100%;
  padding: calc(var(--default-spacing) * v-bind(paddingVertical))
    calc(var(--default-spacing) * v-bind(paddingHorizontal));
}
</style>

