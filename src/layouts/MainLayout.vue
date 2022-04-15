<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";

const data = await new Promise((res) => {
  setTimeout(() => {
    res("Loaded");
  }, 500);
});
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="container">
    <HeaderComponent />
    {{ data }}
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

