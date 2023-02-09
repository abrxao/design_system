import React, { FunctionComponent, SyntheticEvent} from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';
import General from '../generalInterface';
interface ToggleProps extends General{
  content?: any;
}

const ToggleButton: FunctionComponent<ToggleProps> = (
  props
) => {
  const Icon = props.content ?? AiOutlinePoweroff;
  return (
    <div
      className={`neo-toogle-btn ${props.variation ?? ''}`}
      onChange={(e) => (props.onChange ? props.onChange(e) : {})}
      onBlur={(e) => (props.onBlur ? props.onBlur(e) : {})}
      onKeyDown={(e) => (props.onKeyDown? props.onKeyDown(e) : {})}
      style={props.sx}>
      <input
        type='checkbox'
        name='teste2'
        id={props.id}
      />
      <label htmlFor={props.id}>
        {<Icon />}
      </label>
    </div>
  );
};
export default ToggleButton;
