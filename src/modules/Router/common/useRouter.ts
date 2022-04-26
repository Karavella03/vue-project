import { inject } from 'vue';

import { ROUTER_KEY } from '@/modules/Router/constants/injectionKeys';
import { IRouter } from '@/modules/Router/interfaces/interfaces';

export const useRouter = (): IRouter => {
  const router = inject<IRouter>(ROUTER_KEY);
  if (!router) {
    throw Error('Should be wrapped in RouterProvider');
  }

  return router;
};
