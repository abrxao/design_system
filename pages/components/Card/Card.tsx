
import React, { FunctionComponent } from 'react';
import General from '../generalInterface';

interface CardProps extends General{
  children: any;
  img?: any;
  variation?: string;
}

const Card: FunctionComponent<CardProps> = (props) => {
  return (
    <div className={`neo-card ${props.variation}`}>
      {props.children}
    </div>
  );
}

export default Card;
