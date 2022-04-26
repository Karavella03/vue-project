import { ref, provide, computed, onMounted } from 'vue';

import { IRouter } from '@/modules/Router/interfaces/interfaces';
import { ROUTER_KEY } from '@/modules/Router/constants/injectionKeys';
import { RouterMap, RoutesEnum } from '@/modules/Router/constants/routes';

export const useLocation = () => {
  const path = ref<string>(RoutesEnum.MAIN);
  const params = ref(new URLSearchParams(location.search));

  const CurrentPage = computed(() => {
    if (path.value in RouterMap) {
      return RouterMap[path.value as RoutesEnum];
    }
    return RouterMap[RoutesEnum.MAIN];
  });

  const getParam = (key: string) => {
    return params.value.get(key);
  };

  const redirect = (route: RoutesEnum, search?: Record<string, string>) => {
    const searchParams = new URLSearchParams(search);
    const searchParamsString = searchParams.toString();
    const newRoute = `${route}${search ? `?${searchParamsString}` : ''}`;
    history.replaceState(null, '', newRoute);
    path.value = route;
    params.value = searchParams;
  };

  onMounted(() => {
    const mountPath = window.location.pathname.toLocaleLowerCase();
    const mountParams = new URLSearchParams(location.search);
    const mountParamsObject = Object.fromEntries(mountParams);

    if (mountPath in RouterMap && mountPath !== path.value) {
      redirect(mountPath as RoutesEnum, mountParamsObject);
    }
  });

  provide<IRouter>(ROUTER_KEY, {
    path,
    redirect,
    CurrentPage,
    getParam,
  });
};
