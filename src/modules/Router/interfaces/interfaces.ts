import { Component, ComputedRef, Ref } from 'vue';

import { RoutesEnum } from '@/modules/Router/constants/routes';

export interface IRouter {
  path: Ref<string>;
  CurrentPage: ComputedRef<Component>;
  redirect: (route: RoutesEnum, search?: Record<string, string>) => void;
  getParam: (key: string) => string | null;
}
