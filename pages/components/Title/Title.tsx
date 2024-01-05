import React, { FunctionComponent } from 'react';
import General from '../generalInterface';

interface TitleProps extends Omit<General, 'onBlur'> {
  variation?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title: FunctionComponent<TitleProps> = (props) => {
  return (
    <>
      {props.variation == 'h1' && (
        <div className='title-box'>
          <h1
            className='neo-title'
            style={props.sx}>
            {props.children}
          </h1>
        </div>
      )}
      {props.variation == 'h2' && (
        <div className='title-box'>
          <h2
            className='neo-title'
            style={props.sx}>
            {props.children}
          </h2>
        </div>
      )}
      {props.variation == 'h3' && (
        <div className='title-box'>
          <h3
            className='neo-title'
            style={props.sx}>
            {props.children}
          </h3>
        </div>
      )}
      {props.variation == 'h4' && (
        <div className='title-box'>
          <h4
            className='neo-title'
            style={props.sx}>
            {props.children}
          </h4>
        </div>
      )}
      {props.variation == 'h5' && (
        <div className='title-box'>
          <h5
            className='neo-title'
            style={props.sx}>
            {props.children}
          </h5>
        </div>
      )}
      {props.variation == 'h6' && (
        <div className='title-box'>
          <h6
            className='neo-title'
            style={props.sx}>
            {props.children}
          </h6>
        </div>
      )}
    </>
  );
};

export default Title;
