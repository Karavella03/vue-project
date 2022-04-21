export interface ISliderItem {
  alt: string;
  fileName: string;
  onClick?: () => void;
  head?: ISliderTextOptions;
  description?: ISliderTextOptions;
}

export interface ISliderTextOptions {
  title: string;
  vertical: TextPosition;
  horizontal: TextPosition;
  color?: string;
}

export type TextPosition = 'start' | 'end' | 'center';

export type ButtonDirection = 'start' | 'end';
