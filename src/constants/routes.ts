import { Component } from 'vue';
import Contacts from '@/modules/Contacts';
import Main from '@/modules/Main';

export enum RoutesEnum {
  MAIN = '/',
  CONTACTS = '/contacts',
}

export type RouterMap = {
  [s in RoutesEnum]: Component;
};

export const RouterMap: RouterMap = {
  [RoutesEnum.CONTACTS]: Contacts,
  [RoutesEnum.MAIN]: Main,
};
