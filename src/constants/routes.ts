import { Component, defineAsyncComponent } from 'vue';
import Main from '@/modules/Main';
import Blog from '@/modules/Blog';

export enum RoutesEnum {
  MAIN = '/',
  CONTACTS = '/contacts',
  BLOG = '/blog',
}

export type RouterMap = {
  [s in RoutesEnum]: Component;
};

export const RouterMap: RouterMap = {
  [RoutesEnum.CONTACTS]: defineAsyncComponent(
    () => import('@/modules/Contacts')
  ),
  [RoutesEnum.MAIN]: defineAsyncComponent(() => import('@/modules/Main')),
  [RoutesEnum.BLOG]: defineAsyncComponent(() => import('@/modules/Blog')),
};
