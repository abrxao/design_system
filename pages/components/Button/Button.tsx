import React, { FunctionComponent, ReactElement } from 'react';


export interface AppProps {
  variation?: string;
  children: string;
  width?: string;
  Icon?:any;
  onChange?: Function;
}



const Button: FunctionComponent<AppProps> = (props) => {
  const width = props.width ?? 'auto';
  const variation = props.variation;
  const Icon = props.Icon;
  const onChange = props.onChange?props.onChange:()=>{};
  return (
    <div className={`neo-button`}>
      <button
        onChange={e=>onChange(e)}
        className={`${variation} ${width}`}>
        {props.children}
        {Icon}
        {props.variation == 'bt-line' && <span className='bt-line'></span>}
      </button>
    </div>
  );
};
export default Button;
