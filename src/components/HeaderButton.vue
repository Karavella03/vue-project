<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  active: {
    default: false,
    type: Boolean,
  },
});
</script>

<script lang="ts">
export default {};
</script>

<template>
  <a
    @click="$emit('onclick')"
    class="HeaderButtonContainer"
    :class="{ HeaderButtonActive: active }"
  >
    <slot></slot>
  </a>
</template>


<style scoped>
.HeaderButtonContainer {
  padding-inline: 20px;
  line-height: 50px;
  cursor: pointer;
  color: var(--font-color);
  font-size: var(--header-buttons-font-size);
  font-weight: var(--header-buttons-font-weight);
  text-decoration: none;
  display: inline-block;
}
.HeaderButtonContainer:hover {
  color: var(--font-color-hover);
}
.HeaderButtonActive {
  color: var(--font-color-active);
}
</style>

