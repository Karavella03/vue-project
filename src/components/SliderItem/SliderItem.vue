<script setup lang="ts">
import { throttle } from '@/common/throttle';
import {
  computed,
  defineProps,
  onMounted,
  onUnmounted,
  PropType,
  ref,
  watch,
} from 'vue';

import { ISliderItem } from './types';

const props = defineProps({
  slide: {
    required: true,
    type: Object as PropType<ISliderItem>,
  },
  position: {
    type: Number,
    default: 1,
  },
});
const backgroundImage = `url(${require(`@/assets/${props.slide.fileName}`)})`;

const widthRef = ref<HTMLDivElement>();
const width = ref(widthRef.value?.offsetWidth);

const resizing = ref(false);
const stopResizing = () => {
  if (resizing.value) {
    resizing.value = false;
  }
};

const throttledStopResizing = throttle(stopResizing, 500, true);

const onWidthChange = () => {
  resizing.value = true;
  width.value = widthRef.value?.offsetWidth;
};

watch(width, throttledStopResizing);

onMounted(() => {
  width.value = widthRef.value?.offsetWidth;
  window.addEventListener('resize', onWidthChange);
});
onUnmounted(() => window.removeEventListener('resize', onWidthChange));

const transformX = computed(
  () => `translateX(${(width.value || 0) * -props.position}px)`
);
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div
    ref="widthRef"
    class="SliderItemContainer"
    :class="{
      SliderItemContainerAnimated: !resizing,
      SliderItemContainerClickable: slide.onClick,
    }"
    @click="slide.onClick"
  ></div>
</template>

<style scoped>
.SliderItemContainer {
  display: inline-block;
  width: var(--slider-width);
  max-width: var(--slider-max-width);
  min-width: var(--slider-min-width);
  height: var(--slider-height);
  background-image: v-bind(backgroundImage);
  background-size: cover;
  position: relative;
  left: 0;
  transform: v-bind(transformX);
}

.SliderItemContainerClickable {
  cursor: pointer;
}
.SliderItemContainerAnimated {
  transition: all 500ms ease-in-out;
}
</style>
