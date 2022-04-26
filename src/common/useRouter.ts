import { Component, computed, ComputedRef, inject, ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store/state';
import { RouterMap, RoutesEnum } from '@/constants/routes';
import { ROUTER_KEY } from '@/constants/injectionKeys';
import { IRouter } from '@/components/RouterProvider/interfaces';

export const useRouter = (): IRouter => {
  const router = inject<IRouter>(ROUTER_KEY);
  if (!router) {
    throw Error('Should be wrapped in RouterProvider');
  }

  return router;
};
