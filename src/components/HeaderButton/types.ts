import { Component } from 'vue';

import { RoutesEnum } from '@/modules/Router';

export interface IHeaderButton {
  title: string | Component;
  route?: RoutesEnum;
  onClick?: () => void;
}
