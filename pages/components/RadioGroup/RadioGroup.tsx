import React, { FunctionComponent } from "react";
import General from "../generalInterface";
export interface RadioGroupProps extends General{
    label:string;
    options:string[];
}

const RadioGroup:FunctionComponent<RadioGroupProps> = (props)=> {
  return (
    <div className='radioGroup'>
      <fieldset>
        <div className='radioGroup inputs'>
          {props.options.map((elem: any, index: number) => {
            return (
              <div key={index + 1} className='inputBlock'>
                <input
                  type='radio'
                  id={elem + index}
                  name={props.label}
                  value={elem}
                />
                <label htmlFor={elem + index}>{elem}</label>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}

export default RadioGroup;
