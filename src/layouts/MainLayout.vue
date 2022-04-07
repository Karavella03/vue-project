<script setup lang="ts">
const data = await new Promise((res) => {
  setTimeout(() => {
    res("Loaded");
  }, 3000);
});
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="container">
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

