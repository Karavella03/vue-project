<script setup lang="ts">
import ViewContainer from "@/components/ViewContainer";
</script>

<script lang="ts">
export default {};
</script>

<template>
  <ViewContainer
    ><img
      intrinsicsize=""
      class="MainWrapperPicture"
      src="@/assets/cover.jpg"
      alt="Cat"
  /></ViewContainer>
</template>

<style scoped>
.MainWrapperPicture {
  width: 100%;
  object-fit: cover;
  height: 1440px;
}
</style>