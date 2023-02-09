import { FunctionComponent } from 'react';
import React from 'react';
import General from '../generalInterface';

const Tag: FunctionComponent<General> = (props) => {
  return (
    <div
      className={`neo-tag ${props.variation}`}
      style={props.sx}>
      <div className={`content`}>{props.children}</div>
    </div>
  );
};

export default Tag;
