import { RoutesEnum, RouterMap } from './constants/routes';
import { ROUTER_KEY } from './constants/injectionKeys';
import { IRouter } from './interfaces/interfaces';

import RouterProvider from './components/RouterProvider';

import { useLocation } from './common/useLocation';
import { useRouter } from './common/useRouter';

export {
  RoutesEnum,
  RouterMap,
  ROUTER_KEY,
  RouterProvider,
  useLocation,
  useRouter,
};

export type { IRouter };
