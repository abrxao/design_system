import { FunctionComponent } from 'react';
import React from 'react';

export interface TagProps {
  children: any;
  variation: string;
  sx?: any;
}

const Tag: FunctionComponent<TagProps> = (props) => {
  return (
    <div
      className={`neo-tag ${props.variation}`}
      style={props.sx}>
      <div className={`content`}>{props.children}</div>
    </div>
  );
};

export default Tag;
