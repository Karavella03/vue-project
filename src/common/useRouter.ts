import { Component, computed, ComputedRef, ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store/state';
import { RouterMap, RoutesEnum } from '@/constants/routes';

export interface IUseRouter {
  hash: ComputedRef<string>;
  CurrentPage: ComputedRef<Component>;
  redirect: (route: RoutesEnum, search?: Record<string, string>) => void;
  getParam: (key: string) => string | null;
}

export const useRouter = (): IUseRouter => {
  const store = useStore<State>();
  const hash = computed(() => store.state.locationHash.toLowerCase());
  const params = ref(new URLSearchParams(location.search));
  const CurrentPage = computed(() => {
    if (hash.value in RouterMap) {
      return RouterMap[hash.value as RoutesEnum];
    }
    return RouterMap[RoutesEnum.MAIN];
  });

  const redirect = (route: RoutesEnum, search?: Record<string, string>) => {
    const searchParams = new URLSearchParams(search).toString();
    history.replaceState(null, '', `?${searchParams}`);
    window.location.hash = `#${route}`;
    params.value = new URLSearchParams(location.search);
  };

  const getParam = (key: string) => {
    return params.value.get(key);
  };

  return {
    hash,
    CurrentPage,
    redirect,
    getParam,
  };
};
