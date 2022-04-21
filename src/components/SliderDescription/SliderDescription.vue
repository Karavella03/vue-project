<script setup lang="ts">
import { defineProps, PropType } from 'vue';

import { ISliderTextOptions } from '../SliderButton/types';

const props = defineProps({
  head: {
    required: false,
    type: Object as PropType<ISliderTextOptions>,
  },
  description: {
    required: false,
    type: Object as PropType<ISliderTextOptions>,
  },
});

const headColor = props.head?.color || 'var(--font-color-hover)';
const descriptionColor = props.description?.color || 'var(--font-color-active)';
const descriptionVertical = props.description?.vertical || 'start';
const descriptionHorizontal = props.description?.horizontal || 'start';
const headVertical = props.head?.vertical || 'start';
const headHorizontal = props.head?.horizontal || 'start';
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="SliderDescriptionContainer" v-if="head || description">
    <div class="SliderDescriptionHead">
      <p class="SliderDescriptionParagraph">{{ head?.title }}</p>
    </div>
    <div class="SliderDescriptionDescription">
      <p class="SliderDescriptionParagraph">{{ description?.title }}</p>
    </div>
  </div>
</template>

<style scoped>
.SliderDescriptionContainer {
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: calc(var(--default-spacing) * 9);
  padding-bottom: calc(var(--default-spacing) * 9);
  left: var(--slider-button-width);
  right: var(--slider-button-width);
  white-space: normal;
  overflow: hidden;
}
.SliderDescriptionHead {
  width: 100%;
  color: v-bind(headColor);
  font-size: var(--slider-item-head-font-size);
  display: flex;
  justify-content: v-bind(headHorizontal);
  align-items: v-bind(headVertical);
  height: 30%;
}
.SliderDescriptionDescription {
  width: 100%;
  color: v-bind(descriptionColor);
  font-size: var(--slider-item-description-font-size);
  display: flex;
  justify-content: v-bind(descriptionHorizontal);
  align-items: v-bind(descriptionVertical);
  height: 70%;
}
.SliderDescriptionParagraph {
  width: 50%;
}
</style>
