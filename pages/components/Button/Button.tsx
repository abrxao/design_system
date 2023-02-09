import React, { FunctionComponent, ReactElement } from 'react';
import General from '../generalInterface';

export interface AppProps extends General{
  width?: string;
  Icon?:any;
  type?: "button"|"submit"|"reset"|undefined;
}

const Button: FunctionComponent<AppProps> = (props) => {
  const width = props.width ?? 'auto';
  const variation = props.variation;
  const Icon = props.Icon;
  return (
    <div className={`neo-button`}>
      <button
        type={props.type}
        onClick={(e) => (props.onClick ? props.onClick(e) : {})}
        onChange={(e) => (props.onChange ? props.onChange(e) : {})}
        onKeyDown={(e) => (props.onKeyDown ? props.onKeyDown(e) : {})}
        className={`${variation} ${width}`}>
        {props.children}
        {Icon}
        {props.variation == 'bt-line' && <span className='bt-line'></span>}
      </button>
    </div>
  );
};
export default Button;
