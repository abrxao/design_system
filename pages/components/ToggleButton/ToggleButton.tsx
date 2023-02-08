import React, { FunctionComponent, SyntheticEvent, useState } from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';

interface ToggleProps {
  onChange?: (e: SyntheticEvent) => {};
  content?: any;
  id: string;
  variation?: string
}

const ToggleButton: FunctionComponent<ToggleProps> = (props) => {
  const onChange = props.onChange ? props.onChange : () => {};
  const Icon = props.content ?? AiOutlinePoweroff;
  return (
    <div
      className={`neo-toogle-btn ${props.variation ?? ''}`}
      onChange={(e) => onChange(e)}>
      <input
        type='checkbox'
        name='teste2'
        id={props.id}
      />
      <label htmlFor={props.id}>
        <Icon />
      </label>
    </div>
  );
};
export default ToggleButton;
