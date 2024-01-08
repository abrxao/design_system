import React, {
  FormEventHandler,
  FunctionComponent,
  SyntheticEvent,
} from 'react';
import General from '../generalInterface';
interface SelectInputProps extends General {
  disable?: boolean;
  isLoading?: boolean;
  title: string;
  options: string[];
  'data-testid'?: string;
  onChange?: FormEventHandler<HTMLDivElement>;
}

const SelectInput: FunctionComponent<SelectInputProps> = (props) => {
  return (
    <div
      id={props.id}
      className={'neo-input-select' + (props.disable ? ' disable' : '')}
      style={props.sx}
      onChange={props.onChange ? props.onChange : () => {}}>
      <label>
        {props.title}
        {props.isLoading && (
          <div className='loading'>
            <span></span>
          </div>
        )}
        <select
          name={props.id}
          data-testid={props['data-testid'] ?? ''}
          style={{ display: props.isLoading ? 'none' : 'block' }}>
          {props.options.map((tipo, index) => {
            return (
              <option
                key={index + tipo}
                value={tipo}>
                {tipo[0].toUpperCase() + tipo.substring(1)}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};
export default SelectInput;
