<script setup lang="ts">
import ViewContainer from '@/components/ViewContainer';
import SliderComponent from '@/components/SliderComponent';
import { ISliderItem } from '@/components/SliderItem/types';

const slides: ISliderItem[] = [
  { alt: 'Cat', fileName: 'cover.jpg' },
  { alt: 'Cat2', fileName: 'cat2.jpg' },
  { alt: 'Cat3', fileName: 'cat3.jpg' },
  { alt: 'Cat4', fileName: 'cat4.jpg' },
];
</script>

<script lang="ts">
export default {};
</script>

<template>
  <ViewContainer><SliderComponent :sliderItems="slides" /></ViewContainer>
</template>

<style scoped></style>
