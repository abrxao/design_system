
import React, { FunctionComponent } from 'react';

interface CardProps {
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
