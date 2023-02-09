import React,{ FunctionComponent } from 'react';
import General from '../generalInterface';

type TitleProps = Omit<General, "onBlur">

const Title: FunctionComponent<TitleProps> = (props) => {
  return (
    <div className='neo-title' style={props.sx}>
      {props.variation == 'h1' && <div className='title-box'><h1>{props.children}</h1></div>}
      {props.variation == 'h2' && <div className='title-box'><h2>{props.children}</h2></div>}
      {props.variation == 'h3' && <div className='title-box'><h3>{props.children}</h3></div>}
      {props.variation == 'h4' && <div className='title-box'><h4>{props.children}</h4></div>}
      {props.variation == 'h5' && <div className='title-box'><h5>{props.children}</h5></div>}
      {props.variation == 'h6' && <div className='title-box'><h6>{props.children}</h6></div>}
    </div>
  );
};

export default Title;
