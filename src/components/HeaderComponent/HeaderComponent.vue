<script setup lang="ts">
import { HEADER_BUTTONS } from '@/constants/headerButtons';
import { useRouter } from '@/modules/Router';

import HeaderButton from '../HeaderButton';

const { path, redirect } = useRouter();
</script>

<script lang="ts">
export default {};
</script>

<template>
  <div class="HeaderContainer">
    <div class="HeaderTitle">Product</div>
    <ul class="HeaderButtonsList">
      <li
        v-for="item in HEADER_BUTTONS"
        :key="item.title.toString()"
        class="HeaderButtonItem"
      >
        <HeaderButton
          @click="
            item.route && redirect(item.route);
            item.onClick && item.onClick();
          "
          :active="item.route === path"
          >{{ item.title }}</HeaderButton
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.HeaderContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: var(--header-height);
  min-width: var(--main-layout-min-width);
  max-width: var(--main-layout-max-width);
  width: var(--main-layout-width);
  padding-inline: calc(var(--default-spacing) * 6);
  border-bottom: 1px solid var(--header-border-color);
  background-color: var(--header-background);
}
.HeaderTitle {
  font-size: var(--header-title-font-size);
  font-weight: var(--header-title-font-weight);
  color: var(--font-color);
}
.HeaderButtonItem {
  display: inline-block;
}

.HeaderButtonsList {
  margin-left: auto;
}
</style>
