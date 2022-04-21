import { Component, computed, ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store/state';
import { RouterMap, RoutesEnum } from '@/constants/routes';

export interface IUseRouter {
  hash: ComputedRef<string>;
  CurrentPage: ComputedRef<Component>;
  redirect: (route: RoutesEnum) => void;
}

export const useRouter = (): IUseRouter => {
  const store = useStore<State>();
  const hash = computed(() => store.state.locationHash.toLowerCase());
  const CurrentPage = computed(() => {
    if (hash.value in RouterMap) {
      return RouterMap[hash.value as RoutesEnum];
    }
    return RouterMap[RoutesEnum.MAIN];
  });

  const redirect = (route: RoutesEnum) => {
    window.location.hash = `#${route}`;
  };
  return {
    hash,
    CurrentPage,
    redirect,
  };
};
