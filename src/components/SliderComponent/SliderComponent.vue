<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue';
import { ref } from '@vue/reactivity';

import { OFFSET } from '@/constants/slider';

import SliderButton from '../SliderButton';
import SliderItem from '../SliderItem';
import { ISliderItem } from '../SliderItem/types';
import { ButtonDirection } from '../SliderButton/types';

const props = defineProps({
  sliderItems: {
    type: Array as PropType<ISliderItem[]>,
    required: true,
  },
});

const slides = computed(() => props.sliderItems.map((slide) => ref(slide)));
const position = ref(0);

const roundPosition = () => {
  position.value = Math.round(position.value);
};

const handleClickNext = () => {
  position.value += 1;
  roundPosition();
};
const handleClickPrevious = () => {
  position.value -= 1;
  roundPosition();
};

const handleMouseEnter = (direction: ButtonDirection) => {
  if (direction === 'start') {
    position.value -= OFFSET;
    return;
  }
  position.value += OFFSET;
};
const handleMouseLeave = (direction: ButtonDirection) => {
  roundPosition();
};
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="SliderContainer">
    <SliderButton
      v-if="position > OFFSET"
      :direction="'start'"
      @click.stop="handleClickPrevious"
      @mouseenter="handleMouseEnter('start')"
      @mouseleave="handleMouseLeave('start')"
    />
    <div class="SliderItemsContainer">
      <SliderItem
        v-for="(slide, index) in slides"
        :key="`${slide.value.fileName}-${index}`"
        :slide="slide.value"
        :position="position"
        @click="slide.value.onClick"
      />
    </div>
    <SliderButton
      v-if="position < slides.length - 1 - OFFSET"
      :direction="'end'"
      @click.stop="handleClickNext"
      @mouseenter="handleMouseEnter('end')"
      @mouseleave="handleMouseLeave('end')"
    />
  </div>
</template>

<style scoped>
.SliderContainer {
  white-space: nowrap;
  position: relative;
}
.SliderItemsContainer {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  height: var(--slider-height);
}
</style>
