<script setup lang="ts">
import ViewContainer from '@/components/ViewContainer';
import SliderComponent from '@/components/SliderComponent';
import { ISliderItem } from '@/components/SliderItem/types';

const slides: ISliderItem[] = [
  {
    alt: 'Cat',
    fileName: 'cover.jpg',
    head: {
      title: 'Лиза',
      horizontal: 'start',
      vertical: 'start',
    },
    description: {
      title: 'Кошка Никиты',
      horizontal: 'end',
      vertical: 'end',
    },
  },
  {
    alt: 'Cat2',
    fileName: 'cat2.jpg',
    head: {
      title: 'Алиса',
      horizontal: 'end',
      vertical: 'start',
    },
    description: {
      title: 'Кошка Леры',
      horizontal: 'start',
      vertical: 'end',
    },
  },
  {
    alt: 'Cat3',
    fileName: 'cat3.jpg',
    head: {
      title: 'Лиза',
      horizontal: 'start',
      vertical: 'start',
    },
    description: {
      title: 'Кошка Никиты',
      horizontal: 'start',
      vertical: 'end',
    },
  },
  {
    alt: 'Cat4',
    fileName: 'cat4.jpg',
    head: {
      title: 'Персик',
      horizontal: 'start',
      vertical: 'start',
    },
    description: {
      title: 'Кот Максима',
      horizontal: 'end',
      vertical: 'end',
    },
  },
];
</script>

<script lang="ts">
export default {};
</script>

<template>
  <ViewContainer><SliderComponent :sliderItems="slides" /></ViewContainer>
</template>

<style scoped></style>
