import React, { FunctionComponent } from 'react';
import General from '../generalInterface';
interface CardDescriptionBoxProps extends General{
    children:any;
} 

const CardDescriptionBox: FunctionComponent<CardDescriptionBoxProps> = (props) => {
  return (
    <div className='neo-card-description-box'>
      {props.children}
    </div>
  );
};

export default CardDescriptionBox;
