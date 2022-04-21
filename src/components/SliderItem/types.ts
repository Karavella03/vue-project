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
}

export type TextPosition = 'start' | 'end' | 'center';
