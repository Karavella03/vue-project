<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="container">
    <HeaderComponent />
    <slot></slot>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

