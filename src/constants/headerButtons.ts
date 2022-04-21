import { ref } from 'vue';
import { IHeaderButton } from '@/components/HeaderButton/types';

import { RoutesEnum } from './routes';

export const HEADER_BUTTONS: IHeaderButton[] = [
  {
    title: 'Главная',
    route: RoutesEnum.MAIN,
  },
  {
    title: 'Блог',
    route: RoutesEnum.BLOG,
  },
  {
    title: 'Контакты',
    route: RoutesEnum.CONTACTS,
  },
];
