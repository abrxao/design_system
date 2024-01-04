import React, { CSSProperties, StyleHTMLAttributes } from 'react';

export default interface General {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClick?: (
    e: React.MouseEvent<
      HTMLLabelElement | HTMLInputElement | HTMLButtonElement | HTMLDivElement
    >
  ) => void;
  onKeyDown?: (
    e: React.KeyboardEvent<
      HTMLLabelElement | HTMLInputElement | HTMLButtonElement | HTMLDivElement
    >
  ) => void;
  onBlur?: (
    e: React.FocusEvent<
      HTMLLabelElement | HTMLInputElement | HTMLButtonElement | HTMLDivElement
    >
  ) => void;
  id?: string;
  children?: any;
  variation?: string;
  sx?: CSSProperties;
  className?: string;
}
