import React, { FunctionComponent } from 'react';

interface ContainerProps {
  variation?: string;
  children?: any;
  sx?: any;
}

const Container: FunctionComponent<ContainerProps> = (props) => {
  return (
    <div
      className={`neo-container ${props.variation??''}`}
      style={props.sx}>
      {props.children}
    </div>
  );
};

export default Container;
