<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { ButtonDirection } from './types';

defineProps({
  direction: {
    required: true,
    type: String as PropType<ButtonDirection>,
  },
});
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div
    class="SliderButtonContainer"
    :class="{
      SliderButtonContainerStart: direction === 'start',
      SliderButtonContainerEnd: direction === 'end',
    }"
  >
    <div class="SliderButtonArrow">
      {{ direction === 'start' ? '<' : '>' }}
    </div>
  </div>
</template>

<style scoped>
.SliderButtonContainer {
  cursor: pointer;
  display: inline-block;
  position: absolute;
  height: var(--slider-height);
  width: var(--slider-button-width);
  background-color: var(--slider-button-color);
  z-index: 1;
}

.SliderButtonArrow {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 84px;
  font-weight: 900;
  color: var(--slider-arrow-color);
}

.SliderButtonContainer:hover {
  background-color: var(--slider-button-hover-color);
}

.SliderButtonContainerStart {
  left: 0;
}
.SliderButtonContainerEnd {
  right: 0;
}
</style>
