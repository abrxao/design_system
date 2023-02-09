import React, { FunctionComponent } from 'react';
import General from '../generalInterface';


const Container: FunctionComponent<General> = (props) => {
  return (
    <div
      className={`neo-container ${props.variation??''}`}
      style={props.sx}>
      {props.children}
    </div>
  );
};

export default Container;
