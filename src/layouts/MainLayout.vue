<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="container">
    <HeaderComponent class="MainLayoutHeader" />
    <slot></slot>
    <FooterComponent />
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: var(--main-layout-min-height);
  min-width: var(--main-layout-min-width);
  max-width: var(--main-layout-max-width);
  width: var(--main-layout-width);
  margin-inline: auto;
  background-color: var(--main-layout-background);
  padding-top: var(--header-height);
}
.MainLayoutHeader {
  position: fixed;
  top: 0;
}
</style>

