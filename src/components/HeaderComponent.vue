<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import { HEADER_BUTTONS } from "@/constants/headerButtons";

import HeaderButton from "./HeaderButton.vue";

const store = useStore();
const hash = computed(() => store.state.locationHash);
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
          @click="item.onClick"
          :href="item.route"
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

