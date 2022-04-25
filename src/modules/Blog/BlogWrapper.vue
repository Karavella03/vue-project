<script setup lang="ts">
import ViewContainer from '@/components/ViewContainer';
import { useRouter } from '@/common/useRouter';
import { RoutesEnum } from '@/constants/routes';

const router = useRouter();
</script>

<script lang="ts">
export default {};
</script>

<template>
  <ViewContainer
    >Blog
    <button @click="router.redirect(RoutesEnum.BLOG, { param: 'param' })">
      redirect check
    </button>
    {{ router.getParam('param') }}
  </ViewContainer>
</template>
