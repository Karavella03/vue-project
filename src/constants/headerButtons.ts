import { ref } from 'vue';
import { IHeaderButton } from '@/types/HeaderButton';

import { RoutesEnum } from './routes';

export const HEADER_BUTTONS: IHeaderButton[] = [
  {
    title: 'Главная',
    route: RoutesEnum.MAIN,
  },
  {
    title: 'Контакты',
    route: RoutesEnum.CONTACTS,
  },
];
