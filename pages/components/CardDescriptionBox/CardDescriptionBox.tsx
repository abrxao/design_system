import React, { FunctionComponent } from 'react';

interface CardDescriptionBoxProps{
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
