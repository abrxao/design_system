import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  ReactNode,
} from 'react';
import General from '../generalInterface';

export interface AppProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  width?: string;
  Icon?: any;
  variation?: 'primary' | 'secondary' | 'outlined' | 'bt-line';
}

const Button: FunctionComponent<AppProps> = (props) => {
  const width = props.width ?? '';
  const variation = props.variation;
  const Icon = props.Icon;
  return (
    <div className={`neo-button`}>
      <button
        {...props}
        className={`${variation} ${width}`}>
        {Icon}
        {props.variation == 'bt-line' && <span className='bt-line'></span>}
        {props.children}
      </button>
    </div>
  );
};
export default Button;
