import React, { FocusEvent, FunctionComponent, useEffect, useMemo, useState } from 'react';
import {BsAsterisk} from 'react-icons/bs';
import {TbAlertCircle} from 'react-icons/tb';
import General from '../generalInterface';

interface TextInputProps extends General{
  type?: string;
  required?: boolean;
  valid?: boolean;
  label?: string;
}

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  
  const [value, setValue] = useState('');
  const isValidClass = useMemo(() => {
    if (value !== ''){
      return props.valid ? 'valid' : 'invalid';
    }else{
      return '';
    }
  }, [value]);

  const checkInput: Function = (
    e: FocusEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
    {
      props.onBlur && props.onBlur(e);
    }
  };

  return (
    <div className={`neo-input ${isValidClass}`}>
      <input
        placeholder=' '
        className={`${value != '' ? 'filled' : ''}`}
        onBlur={(e) => checkInput(e)}
        onChange={(e) => (props.onChange ? props.onChange(e) : {})}
        onKeyDown={(e) => (props.onKeyDown ? props.onKeyDown(e) : {})}
        required={props.required}
      />
      {props.label && <label>{props.label}</label>}
      {props.required && (
        <span className={`required`}>
          <BsAsterisk />
        </span>
      )}
      {isValidClass === 'invalid' && (
        <span className='alert'>
          Check this input value
          <TbAlertCircle />
        </span>
      )}
    </div>
  );
};

export default TextInput;
