import React from "react";

export default interface General {
  onChange?: (e: React.FormEvent<HTMLInputElement| HTMLButtonElement | HTMLDivElement>) => void;
  onClick?: (
    e: React.MouseEvent<HTMLLabelElement | HTMLInputElement| HTMLButtonElement | HTMLDivElement>
  ) => void;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLLabelElement | HTMLInputElement| HTMLButtonElement | HTMLDivElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLLabelElement | HTMLInputElement| HTMLButtonElement | HTMLDivElement>
  ) => void;
  id?: string;
  children?: any;
  variation?: string;
  sx?:any;
}