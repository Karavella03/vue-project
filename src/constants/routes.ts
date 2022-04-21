import { Component } from 'vue';
import Contacts from '@/modules/Contacts';
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
  [RoutesEnum.CONTACTS]: Contacts,
  [RoutesEnum.MAIN]: Main,
  [RoutesEnum.BLOG]: Blog,
};
