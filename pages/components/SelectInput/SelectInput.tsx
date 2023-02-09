import React,{FunctionComponent, SyntheticEvent } from "react";
import General from "../generalInterface";
interface SelectInputProps extends General{
  disable: boolean;
  isLoading: boolean;
  title: string;
  options: string[];
}

const SelectInput: FunctionComponent<SelectInputProps> = (props)=> {
  return (
    <div
      id={props.id}
      className={'neo-input-select' + (props.disable ? ' disable' : '')}
      style={props.sx}
      onChange={props.onChange?props.onChange:()=>{}}
      >
      <label>
        {props.title}
        {props.isLoading && (
          <div className='loading'>
            <span></span>
          </div>
        )}
        <select
          name={props.id}
          style={{ display: props.isLoading ? 'none' : 'block' }}>
          {props.options.map((tipo, index) => {
            return (
              <option key={index}>
                {tipo[0].toUpperCase() + tipo.substring(1)}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
export default SelectInput;
