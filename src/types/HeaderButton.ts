import { Ref } from 'vue';

export interface IHeaderButton {
  title: string;
  route?: string;
  onClick?: () => void;
}
