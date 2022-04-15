<script setup lang="ts">
import { HEADER_BUTTONS } from "@/constants/headerButtons";

import HeaderButton from "./HeaderButton.vue";
import { useRouter } from "@/common/useRouter";

const { hash, redirect } = useRouter();
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
        :key="item.title"
        class="HeaderButtonItem"
      >
        <HeaderButton
          @click="
            item.route && redirect(item.route);
            item.onClick && item.onClick();
          "
          :active="item.route === hash"
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
  min-width: var(--header-min-width);
  width: 100%;
  padding-inline: 48px;
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

