import { Component } from 'vue';
import { RoutesEnum } from '@/constants/routes';

export interface IHeaderButton {
  title: string | Component;
  route?: RoutesEnum;
  onClick?: () => void;
}
