<script setup lang="ts">
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="FooterContainer">
    <p class="FooterParagraph">© 2022 Product.</p>
  </div>
</template>


<style scoped>
.FooterContainer {
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: var(--footer-height);
  min-width: var(--main-layout-min-width);
  max-width: var(--main-layout-max-width);
  width: var(--main-layout-width);
  padding-inline: calc(var(--default-spacing) * 6);
  border-top: 1px solid var(--footer-border-color);
}
.FooterParagraph {
  font-size: var(--footer-paragraph-font-size);
  font-weight: var(--footer-paragraph-font-weight);
  color: var(--font-color);
}
</style>

